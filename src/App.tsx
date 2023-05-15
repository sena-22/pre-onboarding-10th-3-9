import './App.css';
import Main from './pages/Main';
import { SearchContextProvider } from './contexts/SearchContext';
import Cache from './utils/cache';

const SuggestionsCache = new Cache();

const App = () => {
  return (
    <SearchContextProvider cache={SuggestionsCache}>
      <Main />
    </SearchContextProvider>
  );
};

export default App;
