<template>
  <div :key="station.id" v-for="station in stations">
    <Station :station="station" />
    <!-- TODO: Sort by signal strength -->
  </div>
</template>

<script>
import Station from "./Station";

export default {
  name: "Stationlist",
  props: {
    stations: Array,
  },
  components: {
    Station,
  },
};
</script>
