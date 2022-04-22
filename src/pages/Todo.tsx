import React from 'react';
import MainLayout from '../components/Common/MainLayout';
import TodoList from '../components/Todo/TodoList';

const TodoPage = (): JSX.Element => {
  return (
    <MainLayout>
      <TodoList />
    </MainLayout>
  );
};
export default TodoPage;
