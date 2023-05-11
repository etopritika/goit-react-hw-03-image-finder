const URL = 'https://pixabay.com';
const API_KEY = '34805987-f2b531f3f349672084b6a5db6';

function fetchPicture(onSearch) {
  return fetch(
    `${URL}/api/?q=${onSearch}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Упс, не знайшли ${onSearch}`));
  });
}

fetchPicture("cat");
