import { useEffect, useState } from 'react';

import Header from '../components/Header';
import TodoList from '../components/TodoList';
import Searchbar from '../components/Searchbar';

import { getTodoList } from '../api/todo';
import { Todo } from '../@types/todo';

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <Searchbar />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
