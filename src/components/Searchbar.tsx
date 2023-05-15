import InputTodo from './InputTodo';
import Dropdown from './Dropdown';
import useBoolean from '../hooks/useBoolean';
import useClickOutside from '../hooks/useClickOutside';

const Searchbar = () => {
  const {
    value: isDropdownOpen,
    setFalse: closeDropdown,
    setTrue: openDropdown,
  } = useBoolean(false);

  const { ref } = useClickOutside<HTMLDivElement>(closeDropdown);

  return (
    <div className="searchbar-container" ref={ref}>
      <InputTodo onFocus={openDropdown} />
      <Dropdown isOpen={isDropdownOpen} />
    </div>
  );
};

export default Searchbar;
