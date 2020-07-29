<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ListsMovies title="List movies of Comedy" v-bind:movie="comedyMovies"/>
    <ListsMovies title="List movies of Family" v-bind:movie="familyMovies"/>
  </div>
</template>

<script>
import ListsMovies from './components/ListsMovies.vue'

export default {
  name: 'App',
  components: {
    ListsMovies
  },
  computed: {
    comedyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Comedy");
    },
    familyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Family");
    }
  }
}
//hola
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
