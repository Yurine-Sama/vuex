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
    buyClick7: 0,
    Item: [
      {
        id: 1,
        title: "Illya"
      },
      { id: 2, title: "Fate Canival" },
      { id: 3, title: "Kimetsu no yaiba" },
      { id: 4, title: "Arknight Blaze" },
      { id: 5, title: "Peko Peko" },
      { id: 6, title: "The Witcher 3" }
    ],
    showList: []
  },
  mutations: {
    buyClickI1: state => {
      return (
        state.buyClick1++,
        (state.buyClick7 += 50000),
        state.showList.push([{ id: 1 , title:"Illya" }])
      );
    },
    buyClickI2: state => {
      return (
        state.buyClick2++,
        (state.buyClick7 += 25000),
        state.showList.push([{ id: 2 , title:"Fate Canival" }])
      );
    },
    buyClickI3: state => {
      return (
        state.buyClick3++,
        (state.buyClick7 += 1000),
        state.showList.push([{ id: 3 , title:"Kimetsu no yaiba" }])
      );
    },
    buyClickI4: state => {
      return (
        state.buyClick4++,
        (state.buyClick7 += 500),
        state.showList.push(([{ id: 4 , title:"Arknight Blaze" }]))
      );
    },
    buyClickI5: state => {
      return (
        state.buyClick5++, (state.buyClick7 += 5000), state.showList.push([{ id: 5 , title:"Peko Peko" }])
      );
    },
    buyClickI6: state => {
      return (
        state.buyClick6++,
        (state.buyClick7 += 100000),
        state.showList.push([{ id: 6 , title:"The Witcher 3" }])
      );
    },
    CancelItem1: state => {
      if (state.buyClick1 > 0) {
        return (
          state.buyClick1--,
          (state.buyClick7 -= 50000),
          state.showList.pop(state.Item)
        );
      }
    },
    CancelItem2: (state, Item) => {
      if (state.buyClick2 > 0) {
        return (
          state.buyClick2--,
          (state.buyClick7 -= 25000),
          state.showList.pop(Item)
        );
      }
    },
    CancelItem3: (state, Item) => {
      if (state.buyClick3 > 0) {
        return (
          state.buyClick3--, (state.buyClick7 -= 1000), state.showList.pop(Item)
        );
      }
    },
    CancelItem4: (state, Item) => {
      if (state.buyClick4 > 0) {
        return (
          state.buyClick4--, (state.buyClick7 -= 500), state.showList.pop(Item)
        );
      }
    },
    CancelItem5: (state, Item) => {
      if (state.buyClick5 > 0) {
        return (
          state.buyClick5--, (state.buyClick7 -= 5000), state.showList.pop(Item)
        );
      }
    },
    CancelItem6: (state, Item) => {
      if (state.buyClick6 > 0) {
        return (
          state.buyClick6--,
          (state.buyClick7 -= 100000),
          state.showList.pop(Item)
        );
      }
    },
    CancelAllItem: (state, Item) => {
      if (state.buyClick7 > 0) {
        return (
          (state.buyClick1 = 0),
          state.showList.pop(Item),
          (state.buyClick2 = 0),
          state.showList.pop(Item),
          (state.buyClick3 = 0),
          state.showList.pop(Item),
          (state.buyClick4 = 0),
          state.showList.pop(Item),
          (state.buyClick5 = 0),
          state.showList.pop(Item),
          (state.buyClick6 = 0),
          state.showList.pop(Item),
          (state.buyClick7 = 0),
          state.showList.pop(Item)
        );
      }
    },
    say: function(state) {
      if (state.buyClick7 != 0) {
        alert(
          "ขอบคุณที่ใช้บริการ สินค้าที่คุณลูกค้าสั่งนั้นจะถูกจัดส่งให้ในเร็วๆนี้ กรุณาตรวจสอบสินค้าของท่านด้วย ปล.ไม่สามารถคือสินค้าได้นะอิอิ"
        );
      } else if (state.buyClick7 <= 0) {
        alert("ท่านต้องเลือกสินค้าสินค้าก่อนชำระเงินนะ");
      }
    }
  },
  getters: {},
  actions: {}
});
