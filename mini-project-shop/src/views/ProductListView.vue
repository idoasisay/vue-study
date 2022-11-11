<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select name="" id="" class="form-select">
            <option selected></option>
            <option value="1">노트북</option>
            <option value="2">모니터</option>
            <option value="3">마우스</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          :key="i"
          v-for="(product, i) in productList"
        >
          <div class="card" style="width: 18rem">
            <a @click="goToDetail(product.id)" style="cursor: pointer">
              <img
                :src="'/download/${product.id}/${product.path}'"
                alt="..."
                class="card-img-top"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">{{ product.product_name }}</h5>
              <p class="card=text">
                <span class="badge bg-dark text-white mr-1">
                  {{ product.category1 }}
                </span>
                <span class="badge bg-dark text-white mr-1">
                  {{ product.category2 }}
                </span>
                <span class="badge bg-dark text-white">
                  {{ product.category3 }}
                </span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    장바구니 담기
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    주문하기
                  </button>
                </div>
                <small class="text-dark">{{ product.product_price }}원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      productList: [
        {
          id: 1,
          product_name: '맥북',
          category1: '태국',
          category2: '한국',
          category3: '일본',
          product_price: 300
        },
        {
          id: 2,
          product_name: 'LG',
          category1: '행복',
          category2: '슬픔',
          category3: '만약',
          product_price: 500
        },
        {
          id: 3,
          product_name: 'samsung',
          category1: '삼성',
          category2: '엘지',
          category3: '기아',
          product_price: 1000
        }
      ]
    }
  },
  created() {
    // this.getProductList()
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    // async getProductList() {
    //   this.productList = await this.$api('/api/productList', {})
    //   console.log(this.product)
    // }
    // goToDetail(productId) {
    //   this.$router.push({ path: '/detail', query: { product_id: productId } })
    // }
  }
}
</script>
