import React from 'react';
import MainLayout from '@components/Common/MainLayout';
import TodoTemplate from '@components/Todo/TodoTemplate';

const TodoPage = (): JSX.Element => {
  return (
    <MainLayout>
      <TodoTemplate />
    </MainLayout>
  );
};
export default TodoPage;
