<template>
  <div>
    <h3>{{ station.name }}</h3>
    <p>{{ station.freq }}</p>
  </div>
</template>

<script>
export default {
  name: "Station",
  props: {
    station: Object,
  },
};
</script>

<style scoped>
.station {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.station.reception-high {
  border-left: 5px solid green;
}

.station.reception-middle {
  border-left: 5px solid yellow;
}

.station.reception-low {
  border-left: 5px solid gray;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>