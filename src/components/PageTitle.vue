<template>
  <h2>{{ title }}</h2>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      validator: function (value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1;
      },
    },
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
