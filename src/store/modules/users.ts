import store from '@/store';
import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation
} from 'vuex-module-decorators';
import { User, Profile, UserSubmit } from '../interface';
import { loginUser, setJWT } from '../api';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'users',
  store
})
class UsersModule extends VuexModule {
  user: User | null = null;
  profile?: Profile | null;

  @Mutation
  setUser(user: User) {
    if (!user) return;
    setJWT(user.token);
    this.user = user;
  }

  @Action({ commit: 'setUser' })
  async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    return user;
  }

  // getters
  get username() {
    return (this.user && this.user.username) || null;
  }

  // mutations 跟 action 結合, 結束後會自動觸發 mutations 將 return 值儲存到 user
  // @MutationAction({ mutate: ['user'] })
  // async login(userSubmit: UserSubmit) {
  //   const user = await loginUser(userSubmit);
  //   if (user) setJWT(user.user.token);
  //   return { user };
  // }
}

export default getModule(UsersModule);
