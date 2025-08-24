<template>
  <div>
    <h2>Travel Plans</h2>
    <ul>
      <li v-for="plan in travelPlans" :key="plan._id">
        <h3>{{ plan.title }}</h3>
        <p>Start: {{ new Date(plan.startDate).toLocaleDateString() }}</p>
        <p>End: {{ new Date(plan.endDate).toLocaleDateString() }}</p>
        <p>{{ plan.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "TravelPlanList",
  setup() {
    const travelPlans = ref([]);

    const fetchTravelPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/travel-plans"
        );
        travelPlans.value = response.data;
      } catch (error) {
        console.error("Error fetching travel plans:", error);
      }
    };

    onMounted(() => {
      fetchTravelPlans();
    });

    return {
      travelPlans,
      fetchTravelPlans,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>
