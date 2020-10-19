import React, { useEffect, useState } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
interface AutoComplete {
  country: string;
  city: string;
}
const Search = () => {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<AutoComplete[]>();
  const [output, setOutput] = useState<AutoComplete[]>();

  //   call the json data
  useEffect(() => {
    let mounted = true;
    const list = async () => {
      const { data } = await axios.get(
        'https://hitchcliff.github.io/realtors-api/auto_complete.json',
      );
      if (mounted) {
        setData(data.autocomplete);
      }
    };
    list();
    return () => {
      mounted = false;
    };
  }, []);

  //   filter the array
  useEffect(() => {
    const filter = setTimeout(() => {
      if (!data) return;
      const matches = data.filter((item) => {
        const regex = new RegExp(`^${search}`, 'gi');

        return item.city.match(regex) || item.country.match(regex);
      });

      if (search.length === 0) {
        setOutput([]);
      }

      setOutput(matches);
    }, 1000);
    return () => {
      clearTimeout(filter);
    };
  }, [search]);

  //   check errors in the placeholder
  const placeholder =
    output?.length === 0 || !output
      ? ''
      : !output[0].country
      ? ''
      : !output[0].city
      ? ''
      : `${output[0].country}, ${output[0].city}`;

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.formGroup}>
          <div className={styles.placeholder} data-placeholder={placeholder}>
            <input
              type="text"
              name="s"
              id="s"
              onChange={(e) => setSearch(e.currentTarget.value)}
              placeholder="Search"
            />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
