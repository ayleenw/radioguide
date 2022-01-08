<template>
  <form>
    <div class="form-control">
      <label>{{ $t("search") }}</label>
      <input
        type="text"
        v-model="text"
        name="text"
        :placeholder="$t('set-location')"
      />
    </div>
    <div class="form-control form-control-check">
      <label>UKW</label>
      <input type="checkbox" v-model="fm" name="fm" />
      <label>DAB+</label>
      <input type="checkbox" v-model="dab" name="dab" />
    </div>
    <button @click="onClick" class="btn btn-block">{{ $t("go") }}</button>
  </form>
</template>

<script>
export default {
  name: "Searchform",
  props: {},
  methods: {
    onClick() {
      console.log("Clicked");
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>