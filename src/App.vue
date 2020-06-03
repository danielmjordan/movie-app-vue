<template>
	<v-app>
		<v-container>
			<Header
				:showFavorites="showFavorites"
				:page="page"
				@toggle-view="toggleView()"
			/>
			<div v-show="!showFavorites">
				<MovieList :movies="movies" :showIcon="true" :heading="heading" />
			</div>
			<div v-show="showFavorites">
				<MovieList
					:movies="favorites"
					:showIcon="false"
					:heading="`Favorites (${favorites.length})`"
				/>
			</div>
		</v-container>
	</v-app>
</template>

<script>
import Header from "./components/header/Header.vue";
import MovieList from "./components/MovieList.vue";
import { mapState } from "vuex";

export default {
	name: "App",
	components: {
		Header,
		MovieList,
	},

	data() {
		return {
			showFavorites: false,
		};
	},

	computed: {
		...mapState(["movies", "page", "favorites", "heading", "category"]),
	},

	methods: {
		toggleView() {
			this.showFavorites = !this.showFavorites;
		},
		removeMovie(id) {
			this.$store.commit("REMOVE_FROM_LIST", id);
		},
	},

	watch: {
		page() {
			this.$store.dispatch("fetchFilms", {
				page: this.page,
				category: this.category,
			});
		},
	},

	created() {
		this.$store.dispatch("fetchFilms", {
			page: this.page,
			category: this.category,
		});
	},
};
</script>
