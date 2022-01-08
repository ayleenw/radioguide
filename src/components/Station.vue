<template>
  <div class="station">
    <h3>{{ station.name }}</h3>
    <p v-if="station.band == 'FM'">
      FM {{ station.freq }}MHz ({{ $t("signaldb") }}: {{ station.signaldb }}dB)
    </p>
    <p v-if="station.band == 'DAB'">
      DAB+ {{ station.channel }} ({{ $t("bitrate") }}:
      {{ station.bitrate }}kbps, {{ $t("signaldb") }}: {{ station.signaldb }}dB)
    </p>
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