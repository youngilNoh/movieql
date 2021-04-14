let movies = [
	{
		id: 0,
		name: 'StarWars',
		age: 1,
	},
	{
		id: 1,
		name: 'Avengers',
		age: 15,
	},
	{
		id: 2,
		name: 'Godfather',
		age: 99,
	},
	{
		id: 3,
		name: 'Logan',
		age: 8,
	},
];

export const getMovies = () => movies;

export const getById = (id) => {
	const filteredMovies = movies.filter((movie) => movie.id === id);
	return filteredMovies[0];
};

export const deleteMovie = (id) => {
	const cleanedMovies = movies.filter((movie) => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		return false;
	}
};
