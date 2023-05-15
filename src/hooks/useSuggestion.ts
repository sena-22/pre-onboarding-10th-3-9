import { useState } from 'react';
import { Suggestion } from '../@types/search';
import { getSearchData } from '../api/search';
import type Cache from '../utils/cache';

type UseSuggestionsOutput = [Suggestion, (keyword: string) => Promise<void>];

const useSuggestion = (cache: Cache): UseSuggestionsOutput => {
  const [suggestion, setSuggestions] = useState<Suggestion>({
    q: '',
    page: 0,
    limit: 0,
    result: [],
  });

  const clearSuggestions = () => setSuggestions({ q: '', page: 0, limit: 0, result: [] });

  const changeKeyword = async (keyword: string) => {
    if (keyword === '') {
      clearSuggestions();
    } else {
      const cachedData = cache.get<Suggestion>(keyword);
      if (cachedData) {
        setSuggestions(cachedData);
      } else {
        const response = await getSearchData(keyword);
        const searchData = response;
        setSuggestions(searchData);
        cache.set(keyword, searchData);
      }
    }
  };

  return [suggestion, changeKeyword];
};

export default useSuggestion;
