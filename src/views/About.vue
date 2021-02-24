<template>
  <div class="about">
     <div class="container">
    <h4>
      <b-icon icon="cart"></b-icon>รายการสินค้า<b-icon icon="cart"></b-icon>
    </h4>
    <h1>ราคาทั้งหมด = {{ buyClick7 }} บาท</h1>
    <h1>{{ doneTodosCount }}</h1>
    <h1>{{ doubleCounter }}</h1>
    <h1>{{ getTodoById(3) }}</h1>
     </div>
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
