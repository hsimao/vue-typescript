<template>
  <div>
    <h1>Login</h1>
    <input v-model="email" type="text" placeholder="Email" />
    <br />
    <input v-model="password" type="password" placeholder="Password" />
    <br />
    <button @click="handleSubmit">Submit</button>

    <div>username: {{ username }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import users from '@/store/modules/users';
import { UserSubmit } from '@/store/interface';

@Component
export default class extends Vue {
  email = '';
  password = '';

  // 取得 vuex getters
  get username() {
    return users.username;
  }

  handleSubmit(): void {
    console.log('email', this.email);
    console.log('password', this.password);

    const params: UserSubmit = {
      email: this.email,
      password: this.password
    };

    // call store actions
    users.login(params);
  }
}
</script>

<style lang="scss" scoped></style>
