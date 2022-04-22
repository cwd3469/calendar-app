import React from 'react';
import { Button } from '@mui/material';
import instance from '../../utils/axios';
import axios from 'axios';

const TodoList = (): JSX.Element => {
  const clickEvent1 = async () => {
    console.log('click1');
    const res = await instance.get('test/permitAll');
    console.log(res);
  };

  const clickEvent2 = async () => {
    console.log('click2');
    const res = await instance.get('test/seller');
    console.log(res);
  };

  const clickEvent3 = async () => {
    console.log('click3');
    const res = await instance.get('test/admin');
    console.log(res);
  };

  return (
    <div>
      <Button variant="contained" onClick={clickEvent1}>
        Contained
      </Button>
      <Button variant="contained" onClick={clickEvent2}>
        test/seller
      </Button>
      <Button variant="contained" onClick={clickEvent3}>
        test/admin
      </Button>
    </div>
  );
};
export default TodoList;
