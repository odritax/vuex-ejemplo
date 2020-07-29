<template>
  <div>
    <h3>{{title}}</h3>
    <ul>
      <li v-for="movie in this.movie" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"ListsMovies",
  props:{
    title:String,
    movie:Array
  } 
}
//hola
//hola
</script>