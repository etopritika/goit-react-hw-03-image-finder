const BASE_URL = 'https://pixabay.com';
const API_KEY = '34805987-f2b531f3f349672084b6a5db6';

function fetchPicture(onSearch) {
  return fetch(
    `${BASE_URL}/api/?q=${onSearch}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(({ hits }) => {
      if (hits.length === 0) {
        console.log(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      return { hits };
    })
    // .catch(Promise.reject(new Error(`Упс, не знайшли ${onSearch}`)));
}

const api = { fetchPicture };
export default api;
