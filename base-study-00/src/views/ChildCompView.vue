<template>
  <div>
    <button type="button" @click="childFunc" ref="btn">click</button>
    <button type="button" @click="childF">누르면 바뀜</button>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '바꾸기 전',
      msg: '자식 컴포넌트로부터 보내는 메시지',
      test: '멧쎄지',
    };
  },
  mounted() {
    this.$emit('send-message', this.msg);
  },
  methods: {
    childF() {
      this.test = '바꿔버리자';
    },
    callFromParent() {
      console.log('부모 컴포넌트에서 직접 호출한 함수');
    },
    childFunc() {
      console.log(
        '자식 컴포넌트입니다. 부모 컴포넌트에서 직접 발생시킨 거예요.'
      );
    },
  },
};
</script>
