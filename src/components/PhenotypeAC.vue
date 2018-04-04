<template>
  <div>
    <input type="text" v-model="message"/>
    <button v-on:click="handleSendMessage">Send</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'test message',
    };
  },
  methods: {
    handleSendMessage() {
      this.$emit('message', { message: this.message });
    },
  },
};
</script>
<style scoped>
  .facet-label {
    text-align: left;
  }
</style>

