import React from 'react';
interface ISingleMapProp<T> {
  property?: T;
}
const SingleMap = <T,>(props: ISingleMapProp<T>) => {
  const { property } = props;
  console.log(property);
  return <div>single map</div>;
};

export default SingleMap;
