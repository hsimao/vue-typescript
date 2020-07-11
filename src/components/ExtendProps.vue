<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ age }}</h2>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>

    name {{ name }}
    <input type="text" @input="handleChangeName($event)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// 使用 Vue 的寫法來規範 prop, 再讓組件繼承
const typeProps = Vue.extend({
  props: {
    msg: {
      type: String,
      default: 'Use Vue Extend'
    },
    age: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => [{ id: 0, name: 'item1' }]
    }
  }
});

@Component
export default class ExtendProps extends typeProps {
  name = '';

  handleChangeName(e: KeyboardEvent): void {
    const input = e.target as HTMLInputElement;
    this.name = input.value;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
