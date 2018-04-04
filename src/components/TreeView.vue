<template>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </item>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  props: {
    model: Object,
  },
  computed: {
    isFolder() {
      return this.model.children &&
        this.model.children.length;
    },
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType() {
      if (!this.isFolder) {
        this.$set(this.model, 'children', []);
        this.addChild();
        this.open = true;
      }
    },
    addChild() {
      this.model.children.push({name: 'new stuff'});
    },
  },
};
</script>
<style scoped>
</style>
