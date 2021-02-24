import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buyClick1: 0,
    buyClick2: 0,
    buyClick3: 0,
    buyClick4: 0,
    buyClick5: 0,
    buyClick6: 0,
    buyClick7: 0
  },
  mutations: {
    buyClickI1: state => {
      return state.buyClick1++, (state.buyClick7 += 50000);
    },
    buyClickI2: state => {
      return state.buyClick2++, (state.buyClick7 += 25000);
    },
    buyClickI3: state => {
      return state.buyClick3++, (state.buyClick7 += 1000);
    },
    buyClickI4: state => {
      return state.buyClick4++, (state.buyClick7 += 500);
    },
    buyClickI5: state => {
      return state.buyClick5++, (state.buyClick7 += 5000);
    },
    buyClickI6: state => {
      return state.buyClick6++, (state.buyClick7 += 100000);
    },
    CancelItem1: state => {
      if (state.buyClick1 > 0) {
        return state.buyClick1--, (state.buyClick7 -= 50000);
      }
    },
    CancelItem2: state => {
      if (state.buyClick2 > 0) {
        return state.buyClick2--, (state.buyClick7 -= 25000);
      }
    },
    CancelItem3: state => {
      if (state.buyClick3 > 0) {
        return state.buyClick3--, (state.buyClick7 -= 1000);
      }
    },
    CancelItem4: state => {
      if (state.buyClick4 > 0) {
        return state.buyClick4--, (state.buyClick7 -= 500);
      }
    },
    CancelItem5: state => {
      if (state.buyClick5 > 0) {
        return state.buyClick5--, (state.buyClick7 -= 5000);
      }
    },
    CancelItem6: state => {
      if (state.buyClick6 > 0) {
        return state.buyClick6--, (state.buyClick7 -= 100000);
      }
    },
    CancelAllItem: state => {
      if (state.buyClick7 > 0) {
        return (
          (state.buyClick1 = 0),
          (state.buyClick2 = 0),
          (state.buyClick3 = 0),
          (state.buyClick4 = 0),
          (state.buyClick5 = 0),
          (state.buyClick6 = 0),
          (state.buyClick7 = 0)
        );
      }
    },
    say: function(state) {
      if (state.buyClick7 != 0) {
        return alert(
          "ขอบคุณที่ใช้บริการ สินค้าที่คุณลูกค้าสั่งนั้นจะถูกจัดส่งให้ในเร็วๆนี้ กรุณาตรวจสอบสินค้าของท่านด้วย ปล.ไม่สามารถคือสินค้าได้นะอิอิ"
        );
      } else if (state.buyClick7 <= 0) {
        return alert("ท่านต้องเลือกสินค้าสินค้าก่อนชำระเงินนะ");
      }
    }
  },
  getters: {},
  actions: {},
  modules: {}
});
