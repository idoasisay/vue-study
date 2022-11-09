<template>
  <h1>Hello, {{ title }}!</h1>
  <div class="container" :class="{ active: isActive, 'text-red': isRed }">
    {{ htmlString }}
  </div>
  <div v-html="htmlString"></div>
  <input type="text" v-model="inputString" />
  <input type="text" v-model.number="inputNumber" />
  <textarea cols="30" rows="10" v-model="inputTextarea"></textarea>
  <select v-model="city">
    <option value="02">서울</option>
    <option value="21">부산</option>
    <option value="064">제주</option>
  </select>
  <div>
    <label
      ><input type="checkbox" :value="checkValue" v-model="checked" />{{
        checkValue
      }}</label
    >
    <label><input type="checkbox" value="부산" v-model="checked" />부산</label>
    <label><input type="checkbox" value="제주" v-model="checked" />제주</label>
    <br />
    <span>체크한 지역: {{ checked }}</span>
  </div>
  <button type="button" :disabled="inputTextarea === ''">Click</button>
</template>
<script>
export default {
  data() {
    return {
      title: 'world',
      htmlString: '<p style="color:red;">This is a red string.</p>',
      inputString: '무엇이든 물어보세요.',
      inputNumber: 0,
      inputTextarea: '괄호 두개가 아니라 모델로 해야 함',
      city: '02',
      checked: [],
      checkValue: '세상',
      isActive: true,
      isRed: false,
    };
  },
  setup() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
container {
  width: 100%;
  heigth: 200px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
