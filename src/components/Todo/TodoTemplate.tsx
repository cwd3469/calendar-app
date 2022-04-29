import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const TodoTemplate = () => {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', flexGrow: 1, padding: '10px' }}>
          <TodoList />
          <TodoInput />
        </Box>
      </Container>
    </div>
  );
};
export default TodoTemplate;
