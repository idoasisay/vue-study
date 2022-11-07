<template>
  <div>
    <h1 v-if="type === 'A'">지브리</h1>
    <h1 v-else-if="type === 'B'">똠양꿍</h1>
    <h1 v-else>없다</h1>
    <button @click="isTrueHandlr">클릭하면 새로운 게 나타납니다</button>
    <h1 v-show="isTrue">정답!</h1>
    <h1>{{ firstName + ' ' + lastName }}</h1>
    <h1>{{ getFullName() }}</h1>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import mixins from '@/mixins';
export default {
  name: 'ListDataBindingView',
  components: {},
  mixins: [mixins],
  data() {
    return {
      firstName: 'yujeong',
      lastName: 'lee',
      type: 'C',
      isTrue: false,
      productList: [],
    };
  },
  setup() {},
  beforeCreate() {},
  created() {
    this.getList();
  },
  beforeMount() {},
  async mounted() {
    // this.productList = await this.$api()
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    async getList() {
      this.productList = await this.$api(
        'https://e7a69135-4dfa-441a-85ac-74e2521d0508.mock.pstmn.io/list'
      );
      console.log(this.productList);
      console.log('뭐여');
    },
    getFullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    isTrueHandlr: function () {
      if (this.isTrue === false) {
        this.isTrue = true;
      } else {
        this.isTrue = false;
      }
    },
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
