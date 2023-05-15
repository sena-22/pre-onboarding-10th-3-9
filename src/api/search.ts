import apiRequest from './index';

const RESOURCE = '/search';

export const getSearchData = async (searchKeyword: string) => {
  const response = await apiRequest.get(`${RESOURCE}?q=${searchKeyword}`);
  return response.data;
};
