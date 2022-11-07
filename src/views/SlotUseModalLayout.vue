<template>
  <div>
    <SoltModalLayout>
      <template #header><h1>팝업 타이틀</h1></template>
      <template v-slot:default><p>1</p></template>
      <template v-slot:footer>end</template>
    </SoltModalLayout>
  </div>
</template>
<script>
import SoltModalLayout from './SoltModalLayout.vue';
export default {
  components: { SoltModalLayout },
  data() {
    return {
      sampleData: '',
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
