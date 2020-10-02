import React, { useState } from 'react';

interface Props {
  name: string;
  age: number;
}

// const Hello: React.FC<Props> = (props) => {
//   const { name, age } = props;
//   const [state] = useState<{ age: number }>({ fullname: '15' });

//   return (
//     <div>
//       {name} {state.fullname}
//     </div>
//   );
// };

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T,>({ values, children }: FormProps<T>) => {
  return children(values);
};

const Hello: React.FC<any> = () => {
  return <Form<string> values="boom" children={(nc) => <div>{nc}</div>} />;
};
export default Hello;
