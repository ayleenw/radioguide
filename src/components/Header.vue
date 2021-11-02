<template>
  <header>
    <h1>{{ title }}</h1>
    <select
      class="select"
      v-model="lang"
      @change="handleLanguageChange($event)"
    >
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
  data: function () {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
    };
  },
  methods: {
    handleLanguageChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>