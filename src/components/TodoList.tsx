import TodoItem from './TodoItem';
import { Todo } from '../@types/todo';

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
