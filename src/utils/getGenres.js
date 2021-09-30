export default function getGenres(genres) {
  const genresData = genres.map(genre => genre.name);
  const result = [...genresData].join(', ');
  return result;
}
console.log(';;;;;;');
