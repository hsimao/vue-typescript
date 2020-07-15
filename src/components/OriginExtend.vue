<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    name {{ name }}
    <input type="text" @input="handleChangeName($event)" />
    <hr />

    <ul>
      <li v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p>{{ article.subtitle }}</p>
      </li>
    </ul>
    <button @click="handleAddArticle">Random Article</button>
  </div>
</template>

<script lang="ts">
// 定義 api 接口參數
interface ApiParams {
  name: string;
  age: number;
  isAdmin?: boolean;
}

interface Article {
  id: number;
  title: string;
  subtitle: string;
}

import Vue from 'vue';

export default Vue.extend({
  name: 'OrignExtend',
  props: {
    msg: {
      type: String,
      default: 'Use Vue Extend'
    }
  },
  data() {
    return {
      name: 'Mars' as string,
      articles: [] as Article[]
    };
  },
  watch: {
    name(val: string, oldVal: string) {
      console.log('watch name val: ', val);
      console.log('watch name oldVal: ', oldVal);
    }
  },
  methods: {
    handleChangeName(e: KeyboardEvent): string {
      const input = e.target as HTMLInputElement;
      this.name = input.value;
      return '';
    },
    handleSubmit() {
      const params: ApiParams = {
        name: 'Mars',
        age: 0,
        isAdmin: false
      };

      this.handleAPI(params);
    },
    handleAPI(params: ApiParams) {
      console.log('params', params);
    },
    handleAddArticle() {
      const id = Math.floor(Math.random() * 100);
      const article: Article = {
        id,
        title: `title ${id}`,
        subtitle: `subtitle ${id}`
      };

      this.articles.push(article);
    }
  }
});
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
