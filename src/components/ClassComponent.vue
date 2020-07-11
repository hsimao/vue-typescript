<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="https://github.com/kaorun343/vue-property-decorator">
      vue-property-decorator 文檔
    </a>
    <br />
    <a href=" https://class-component.vuejs.org/guide/class-component.html">
      class-component 文檔
    </a>

    <h2>{{ text }}</h2>
    <h2>{{ age }}</h2>

    <h3>{{ count }}</h3>
    <button @click="increment">Add</button>

    <h4>firstName: {{ firstName }}</h4>
    <h4>LastName: {{ lastName }}</h4>
    <input v-model="fullName" />

    <button @click="handleSubmit">submit</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

// 定義 api 接口參數
interface ApiParams {
  name: string;
  age: number;
  isAdmin?: boolean;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop({ default: '18' }) readonly age!: number;

  // data
  text = 'Hello World';
  count = 0;
  typeTest = '';
  url = 'https://github.com/kaorun343/vue-property-decorator';

  // watch
  @Watch('count')
  onCountChanged(val: string, oldVal: string) {
    console.log('watch count val: ', val);
    console.log('watch count: oldVal: ', oldVal);
  }

  // options immediate, deep
  @Watch('firstName', { immediate: true, deep: true })
  onFirstNameChanged(val: string, oldVal: string) {
    console.log('watch firstName val: ', val);
    console.log('watch firstName: oldVal: ', oldVal);
  }

  // methods
  increment(): void {
    this.count++;
  }

  changeTypeText(): string {
    // this.typeTest = 0;
    return this.typeTest;
  }

  // api interface 應用範例
  handleSubmit() {
    const params: ApiParams = {
      name: 'mars',
      age: this.age
      // isAdmin: true
    };
    this.handleAPI(params);
  }

  handleAPI(obj: ApiParams): void {
    console.log('submit api', obj);
  }

  // computed
  firstName = 'Mars';
  lastName = 'CHEN';
  get fullName(): string {
    if (!this.lastName) {
      return this.firstName;
    } else {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  set fullName(value) {
    const [firstName, lastName = ''] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }

  mounted() {
    console.log(this.text);
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
