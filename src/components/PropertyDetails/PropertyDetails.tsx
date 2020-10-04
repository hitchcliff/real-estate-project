import { clear } from 'console';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { clearInterval } from 'timers';

interface PropertyDetails extends RouteComponentProps {}
interface Params {
  id?: string;
}

const PropertyDetails: React.FC<PropertyDetails> = ({ match }) => {
  const [property_id, setProperty_id] = useState<string>('');
  useEffect(() => {
    const params: Params = match.params;
    const interval = setTimeout(() => {
      if (!params.id) return setProperty_id('id_not_found');
      setProperty_id(params.id);
    });
    return () => {
      clearTimeout(interval);
    };
  }, [match]);
  console.log(property_id);

  return <div>PropertyDetails</div>;
};

export default PropertyDetails;
