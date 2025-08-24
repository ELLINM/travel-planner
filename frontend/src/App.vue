<template>
  <div id="app">
    <h1>My Travel Planner</h1>
    <div class="main-container">
      <MapComponent />
      <TravelPlanList />
    </div>
  </div>
</template>

<script>
import MapComponent from "./components/MapComponent.vue";
import TravelPlanList from "./components/TravelPlanList.vue";

export default {
  name: "App",
  components: {
    MapComponent,
    TravelPlanList,
  },
};
</script>

<style>
/* Global styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>
