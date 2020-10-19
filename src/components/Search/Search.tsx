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
        const city = item.city.toLowerCase();
        const country = item.country.toLowerCase();

        console.log(search);
        return city.includes(search) || country.includes(search);
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

  //   results
  const searchMap = output?.map((item: AutoComplete, index: number) => {
    return (
      <div key={index} className={styles.dropwdown}>
        {item.country}, {item.city}
      </div>
    );
  });

  //   check errors in the placeholder
  const placeholder =
    output?.length === 0 || !output
      ? 'USA, Manhattan'
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
            />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        {/* <div className={styles.selections}>{searchMap}</div> */}
      </form>
    </div>
  );
};

export default Search;
