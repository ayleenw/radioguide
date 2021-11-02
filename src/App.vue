<template>
  <div class="container">
    <Header title="RadioGui.de" />
    <Stationlist :stations="stations" />
    <Searchform />
  </div>
</template>

<script>
import Header from "./components/Header";
import Stationlist from "./components/Stationlist";
import Searchform from "./components/Searchform";

export default {
  name: "App",
  components: {
    Header,
    Stationlist,
    Searchform,
  },
  data() {
    return {
      stations: [],
    };
  },
  created() {
    this.stations = [
      {
        id: 1,
        freq: "92.2",
        channel: "",
        name: "SWR1 Baden-Württemberg",
        shortname: "SWR1 BW",
        band: "fm",
        location: "Stuttgart-Degerloch",
        signaldb: 100,
        bitrate: null,
      },
      {
        id: 2,
        freq: "102.3",
        channel: "",
        name: "AFN Stuttgart - The Eagle",
        shortname: "AFN",
        band: "fm",
        location: "Stuttgart-Frauenkopf",
        signaldb: 98,
        bitrate: null,
      },
      {
        id: 3,
        freq: "87.9",
        channel: "",
        name: "Deutschlandfunk Kultur",
        shortname: "DLF Kult",
        band: "fm",
        location: "Stuttgart-Degerloch",
        signaldb: 96,
        bitrate: null,
      },
      {
        id: 4,
        freq: "",
        channel: "5C",
        name: "Deutschlandfunk",
        shortname: "DLF",
        band: "dab",
        location: "Stuttgart-Degerloch",
        signaldb: null,
        bitrate: 128,
      },
    ];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Zen Kaku Gothic New", sans-serif;
}

.container {
  max-width: 500px;
  margin: 10px auto;
  overflow: auto;
  min-height: 300px;
  border: none;
  padding: 10px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
