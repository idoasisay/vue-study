<template>
  <div>
    <child-comp-view @send-message="sendMessage" ref="child_comp_view" />
    <button type="button" @click="changeChildData">Change Child Data</button>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
  </div>
</template>
<script>
import ChildCompView from './ChildCompView.vue';
export default {
  components: { ChildCompView },
  mounted() {
    this.$refs.child_comp_view.callFromParent();
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  computed: {
    test() {
      return this.$refs.child_comp_view.test;
    },
  },
  methods: {
    checkChild() {
      alert(this.test);
    },
    sendMessage(data) {
      console.log(data);
    },
    changeChildData() {
      console.log();
      this.$refs.child_comp_view.message = '변경 후';
    },
  },
};
</script>
