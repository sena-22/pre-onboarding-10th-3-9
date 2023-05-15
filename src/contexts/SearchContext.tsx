import { createContext, useContext, useEffect, useState } from 'react';
import { DEBOUNCE_DELAY_IN_MS, START_ACTIVE_INDEX } from '../utils/const';
import useSuggestion from '../hooks/useSuggestion';
import useDebounce from '../hooks/useDebounce';
import { Suggestion } from '../@types/search';
import Cache from '../utils/cache';

interface SearchState {
  suggestion: Suggestion;
  inputText: string;
  activeIndex: number;
}

interface Dispatch {
  changeInputText: (newKeyword: string) => void;
  hoverSuggestion: (itemIndex: number) => void;
  inactivate: () => void;
}

const SearchContext = createContext<SearchState | null>(null);
const SearchDispatchContext = createContext<Dispatch | null>(null);

export const SearchContextProvider = ({
  cache,
  children,
}: {
  cache: Cache;
  children: React.ReactNode;
}) => {
  const [suggestion, search] = useSuggestion(cache);

  const [inputText, setInputText] = useState('');
  const [activeIndex, setActiveIndex] = useState(START_ACTIVE_INDEX);
  const debouncedKeyword = useDebounce<string>(inputText.trim(), DEBOUNCE_DELAY_IN_MS);

  useEffect(() => {
    search(debouncedKeyword);
  }, [debouncedKeyword]);

  const changeInputText = (keyword: string) => {
    setInputText(keyword);
    setActiveIndex(START_ACTIVE_INDEX);
  };

  const hoverSuggestion = (itemIndex: number) => setActiveIndex(itemIndex);
  const inactivate = () => setActiveIndex(START_ACTIVE_INDEX);

  return (
    <SearchContext.Provider value={{ inputText, activeIndex, suggestion }}>
      <SearchDispatchContext.Provider value={{ changeInputText, hoverSuggestion, inactivate }}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
};

export const useSearchState = () => {
  const state = useContext(SearchContext);
  if (!state) {
    throw new Error('SearchContextProvider not found');
  }
  return state;
};

export const useSearchDispatch = () => {
  const dispatch = useContext(SearchDispatchContext);
  if (!dispatch) {
    throw new Error('SearchContextProvider not found');
  }
  return dispatch;
};
