<template>
  <header>
    <h1>{{ title }}</h1>
    <select class="form-control" v-model="locale" label="Language">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  name: "Header",
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });
    return {
      t,
      locale,
      localeOptions: [
        { value: "de", label: "German" },
        { value: "en", label: "English" },
      ],
    };
  },
  props: {
    title: String,
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