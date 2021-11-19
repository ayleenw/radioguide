<template>
  <div class="container">
    <Header title="RadioGui.de" />
    <Stationlist :stations="stations" />
    <Searchform @start-search="getStations" />
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
  methods: {
    async getStations() {
      const res = await fetch(
        "https://i.fmlist.org/119/rsd.php?token=iRibjfUrT2m6NpHTKTuvAUCc48dwzZh83x1selShaev5rAyqT5qCGkVEV709zhoJ&l=12&b=48&band=DAB"
      );

      const data = await res.json();
      return data;
    },
    async getAuth() {
      // POST request using fetch with set headers

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "text/html",
          key119: "bZvc5GyyBBprCAkcQhVypDPZm3nBJcx7",
        },
      };

      const auth = await fetch(
        "https://i.fmlist.org/119/auth.php",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => ((this.state = data.auth), (this.token = data.token)));
    },
  },
  async created() {
    // this.stations = await this.getStations();
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
