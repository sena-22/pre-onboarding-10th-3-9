import { useSearchState, useSearchDispatch } from '../contexts/SearchContext';

interface DropdownItemProps {
  index: number;
  children: string;
}

const DropdownItem = ({ index, children: suggestion }: DropdownItemProps) => {
  const { inputText, activeIndex } = useSearchState();
  const { hoverSuggestion, inactivate, changeInputText } = useSearchDispatch();

  const onMouseEnter = () => hoverSuggestion(index);
  const onClick = () => changeInputText(suggestion);

  const keywordRegex = new RegExp(`(${inputText})`, 'gi');
  const texts = suggestion.split(keywordRegex);

  return (
    <li
      role="presentation"
      className={index === activeIndex ? 'active dropdown-item' : 'dropdown-item'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={inactivate}
      onClick={onClick}
    >
      {texts.map((text, idx) => {
        const key = text + idx;
        return (
          <div className="dropdown-item-text" key={key}>
            {text === inputText ? <div className="dropdown-input-text">{inputText}</div> : text}
          </div>
        );
      })}
    </li>
  );
};

export default DropdownItem;
