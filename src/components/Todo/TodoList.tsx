import React from 'react';
import Grid from '@mui/material/Grid';
import TodoItem from './TodoItem';

const TodoList = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TodoItem>안녕하세용</TodoItem>
      </Grid>
    </Grid>
  );
};

export default TodoList;
