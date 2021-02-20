<template>
  <div class="about">
    <h1>{{ doneTodosCount }}</h1>
    <h1>{{ doubleCounter }}</h1>
    <h1>{{ getTodoById(3) }}</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    ...mapGetters(["doneTodosCount", "doubleCounter", "getTodoById"])
  }
};
</script>
