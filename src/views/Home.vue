<template>
  <div class="container">
    <h4>
      <b-icon icon="cart"></b-icon>รายการสินค้า<b-icon icon="cart"></b-icon>
    </h4>
    <h1>ราคาทั้งหมด = {{ $store.state.buyClick7 }} บาท</h1>

    <b-button
      variant="success"
      v-on:click="$store.commit('say')"
      @click="$store.commit('CancelAllItem')"
      >จ่ายเงิน</b-button
    >
    <b-button variant="danger" @click="$store.commit('CancelAllItem')">
      ยกเลิกการซื้อทั้งหมด
    </b-button>
    <div>
      <b-card-group deck>
        <b-card
          id:1
          title="Illya"
          img-src="https://resize.cdn.otakumode.com/full/u/45ad53869d004fafb5a16c99a79845a4.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            50,000 บาท
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="warning" @click="$store.commit('buyClickI1')">
                Buy<b-badge variant="light"
                  >{{ $store.state.buyClick1
                  }}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <b-button variant="danger" @click="$store.commit('CancelItem1')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>

        <b-card
          id:2
          title="Fate Canival"
          img-src="https://cdn.animenewsnetwork.com/thumbnails/fit750x750/cms/news.4/168036/w700.jpeg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            25,000 บาท
          </b-card-text>
          <template #footer>
            <small class="text-muted"
              ><b-button variant="warning" @click="$store.commit('buyClickI2')">
                Buy<b-badge variant="light"
                  >{{ $store.state.buyClick2
                  }}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <b-button variant="danger" @click="$store.commit('CancelItem2')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>

        <b-card
          id:3
          title="Kimetsu no yaiba"
          img-src="https://i.pinimg.com/736x/31/c0/cf/31c0cf74246eb496720ec91c03049282.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            1,000 บาท
          </b-card-text>
          <template #footer>
            <small class="text-muted"
              ><b-button variant="warning" @click="$store.commit('buyClickI3')">
                Buy<b-badge variant="light"
                  >{{ $store.state.buyClick3
                  }}<span class="sr-only">unread messges</span>
                </b-badge>
              </b-button>
              <b-button variant="danger" @click="$store.commit('CancelItem3')">
                Cancel
              </b-button>
            </small>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <div>
      <b-card-group deck>
        <b-card
          id:4
          title="Arknight Blaze"
          img-src="https://static.displate.com/857x1200/displate/2020-07-06/1daab3cb667d53897fe14fc9cf6109a4_41f3726e0993fb2bde0eeeb347ea47d6.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            500 บาท
          </b-card-text>
          <template #footer>
            <small class="text-muted"
              ><b-button variant="warning" @click="$store.commit('buyClickI4')">
                Buy<b-badge variant="light"
                  >{{ $store.state.buyClick4
                  }}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <b-button variant="danger" @click="$store.commit('CancelItem4')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>

        <b-card
          id:5
          title="Peko Peko"
          img-src="https://i.redd.it/nbx10zlydeb51.png"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            5,000 บาท
          </b-card-text>
          <template #footer>
            <small class="text-muted"
              ><b-button variant="warning" @click="$store.commit('buyClickI5')">
                Buy<b-badge variant="light"
                  >{{ $store.state.buyClick5
                  }}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <b-button variant="danger" @click="$store.commit('CancelItem5')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
        <b-card
          id:6
          title="The Witcher 3"
          img-src="https://m.media-amazon.com/images/M/MV5BYjY3ODFmNWUtNjhjNC00NTExLWIxYmEtYmQ0YTk5NjkzYTUwXkEyXkFqcGdeQXVyNzEyNjcwNTk@._V1_.jpg"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            100,000 บาท
          </b-card-text>
          <template #footer>
            <small class="text-muted"
              ><b-button variant="warning" @click="$store.commit('buyClickI6')">
                Buy<b-badge variant="light"
                  >{{ $store.state.buyClick6
                  }}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <b-button variant="danger" @click="$store.commit('CancelItem6')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {};
</script>
