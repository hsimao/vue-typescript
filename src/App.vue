<template>
  <div id="app">
    <ClassComponent msg="Use Class Component vue-property-decorator" />
    <hr />
    <ExtendProps msg="混合式：原始寫法 + Class Componentprops" />
    <hr />
    <OriginExtend msg="Use OriginExtend" />
    <hr />
    <Login />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClassComponent from './components/ClassComponent.vue';
import ExtendProps from './components/ExtendProps.vue';
import OriginExtend from './components/OriginExtend.vue';
import Login from './components/Login.vue';

@Component({
  components: {
    ClassComponent,
    ExtendProps,
    OriginExtend,
    Login
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
