<template>
  <div id="map" class="google-map"></div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "MapComponent",
  setup() {
    const initMap = () => {
      // Check for browser geolocation support
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userCoords = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const mapOptions = {
              center: userCoords, // Set center to user's location
              zoom: 12,
            };

            // Initialize map
            // eslint-disable-next-line no-undef
            const map = new google.maps.Map(
              document.getElementById("map"),
              mapOptions
            );

            // Add a marker at the user's location
            // eslint-disable-next-line no-undef
            new google.maps.Marker({
              position: userCoords,
              map: map,
              title: "My Location",
            });
          },
          (error) => {
            // Handle error when user denies location access or other errors
            console.error("Error getting user location:", error);
            // Fallback to a default location (e.g., Seoul)
            const defaultOptions = {
              center: { lat: 37.5665, lng: 126.978 },
              zoom: 12,
            };
            // eslint-disable-next-line no-undef
            const map = new google.maps.Map(
              document.getElementById("map"),
              defaultOptions
            );
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        // Fallback to a default location
        const defaultOptions = {
          center: { lat: 37.5665, lng: 126.978 },
          zoom: 12,
        };
        // eslint-disable-next-line no-undef
        const map = new google.maps.Map(
          document.getElementById("map"),
          defaultOptions
        );
      }
    };

    onMounted(() => {
      initMap();
    });

    return {
      initMap,
    };
  },
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 500px;
}
</style>
