import React, { FC } from 'react';

interface IProps {
  status: boolean;
  name: string;
  code: string;
  message: string;
}

const Error: FC<IProps> = (props) => {
  return <div>{props.status}</div>;
};

export default Error;
