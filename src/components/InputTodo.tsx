import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';

import { createTodo } from '../api/todo';
import useFocus from '../hooks/useFocus';

import { Todo } from '../@types/todo';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void }) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          // eslint-disable-next-line no-alert
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos((prev) => [...prev, data]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-alert
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
      return null;
    },
    [inputText, setTodos],
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

export default InputTodo;
