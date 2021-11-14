<template>
  <header>
    <h1>{{ title }}</h1>
    <select
      class="form-control"
      @change="handleLanguageChange($event.target.value)"
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
  data() {
    return {
      lang: "en",
    };
  },
  methods: {
    handleLanguageChange(lang) {
      console.log(lang);
      this.lang = lang;
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