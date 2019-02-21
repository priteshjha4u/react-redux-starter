const endpoints = {
  // few jsonplaceholder free apis
  allUsers: () => 'https://jsonplaceholder.typicode.com/users',
  getUser: id => `https://jsonplaceholder.typicode.com/users/${id}`,
  allAlbums: () => 'https://jsonplaceholder.typicode.com/albums',
  getAlbum: id => `https://jsonplaceholder.typicode.com/albums/${id}`,
  userAlbum: id => `https://jsonplaceholder.typicode.com/albums?userId=${id}`,
  allPhotos: () => 'https://jsonplaceholder.typicode.com/photos',
  getPhoto: id => `https://jsonplaceholder.typicode.com/photos/${id}`,
  albumPhoto: id => `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
};

export default endpoints;
