import { useSearchState } from '../contexts/SearchContext';
import DropdownItem from './DropdownItem';

interface DropdownProps {
  isOpen: boolean;
}

const Dropdown = ({ isOpen }: DropdownProps) => {
  const { suggestion } = useSearchState();

  if (!isOpen) {
    return null;
  }

  return (
    <ul className="dropdown-container">
      {suggestion.result.map((result, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <DropdownItem key={idx} index={idx}>
          {result}
        </DropdownItem>
      ))}
    </ul>
  );
};

export default Dropdown;
