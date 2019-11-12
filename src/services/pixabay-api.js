const PIXABAY_KEY = '14151364-399e93b2b5477c34b28123471';
const fetchAPIPictures = (query = '', pageNumber = 1) => {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${PIXABAY_KEY}`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};

export default fetchAPIPictures;
