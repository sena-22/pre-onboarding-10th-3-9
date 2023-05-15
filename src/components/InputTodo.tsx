import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';

import { createTodo } from '../api/todo';
import useFocus from '../hooks/useFocus';

import { useSearchDispatch, useSearchState } from '../contexts/SearchContext';

interface SearchInputProps {
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}

const InputTodo = ({ onFocus }: SearchInputProps) => {
  // const [inputText, setInputText] = useState("")
  const { inputText } = useSearchState();

  const { changeInputText } = useSearchDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    // eslint-disable-next-line consistent-return
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
          return changeInputText(data);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-alert
        alert('Something went wrong.');
      } finally {
        changeInputText('');
        setIsLoading(false);
      }
    },
    [inputText, changeInputText],
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeInputText(e.target.value);
  };

  return (
    <form className="form-container">
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={onChange}
        disabled={isLoading}
        onFocus={onFocus}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit" onClick={handleSubmit}>
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

export default InputTodo;
