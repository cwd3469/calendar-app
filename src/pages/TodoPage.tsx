import React from 'react';
import Layout from '../components/Common/Layout';
import TodoList from '../components/Todo/TodoList';

const TodoPage = () => {
  return (
    <Layout>
      <>
        <TodoList />
        TodoPage
      </>
    </Layout>
  );
};
export default TodoPage;
