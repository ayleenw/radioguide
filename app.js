const app = Vue.createApp({
  data() {
    return {
      state: null,
      token: null,
    };
  },
  methods: {
    async getStations() {
      // POST request using fetch with set headers

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'text/html',
          key119: 'bZvc5GyyBBprCAkcQhVypDPZm3nBJcx7',
        },
      };

      const res = await fetch(
        'https://i.fmlist.org/119/auth.php',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => ((this.state = data.auth), (this.token = data.token)));

      // const { results } = await res.json();
      // console.log(results);
    },
  },
});

app.mount('#app');
