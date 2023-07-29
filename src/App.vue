<template>
  <div class="app-container">
    <div class="app-item">
      <movie-list></movie-list>
    </div>
    <div class="app-item">
      <people-list></people-list>
    </div>
    <div class="app-item">
      <video-game-list></video-game-list>
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import PeopleList from "@/components/PeopleList.vue";
import VideoGameList from "@/components/VideoGameList.vue";

export default {
  name: "App",
  components: {
    MovieList,
    PeopleList,
    VideoGameList,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.app-container > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
}

.app-item {
  flex: 1 0 0%;
  flex-basis: fit-content;
}
</style>
