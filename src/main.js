import "./style.scss";
import Vue from "vue";

import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";

import VueResource from "vue-resource";

Vue.use(VueResource);

new Vue ({
	el: "#app",
	data: {
		genre: [],
		time: [],
		movies: [],
		temp: [],
	},
	methods: {
		checkFilter(category, title, checked){
			if(checked) {
				this[category].push(title);
			} else {
				let index = this[category].indexOf(title);
				if(index > -1) {
					this[category].splice(index, 1);
				}
			}
		},
	},
	components: {
		MovieList,
		MovieFilter,
	},
	created(){
		this.$http.get("/api").then(response => {
			// this.temp = response.data;
			// let split = "X300";
			// let replace = "Y1000_SX675_AL_";

			// for (var i = 1; i < this.temp.length; i++){
			// 	if(this.temp[i] != null){
			// 		this.temp[i].movie.Poster = this.temp[i].movie.Poster.split(split)[0] + replace + this.temp[i].movie.Poster.split(split)[1];
			// 		this.movies[i] = this.temp[i];
			// 	}
			// }
			// console.log(this.movies);
			this.movies = response.data;
		});
	},
});