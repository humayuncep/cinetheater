<template>
	<div id="movie-list">
		<div v-for="movie in filterdMovies" class="movie">
			<img v-bind:src="movie.movie.Poster">
			<h2>{{ movie.movie.Title }}</h2>
		</div>
	</div>
</template>

<script>
	import genres from "../util/genres";

    export default {
		props: ["genre", "time", "movies"],
		methods: {
			moviePassesGenreFilter(movie){
				if(!this.genre.length) {
					return true;	
				} else {
					return this.genre.find(genre => movie.genre === genre);
				}
			},
		},
		computed: {
			filterdMovies(){
				return this.movies.filter(this.moviePassesGenreFilter);
			},
		},
	}
</script>