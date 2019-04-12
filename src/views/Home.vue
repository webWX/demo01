<template>
  <section class="page__container page__home">
    <button @click="add">按钮</button>
    <button @click="increment3">increment3</button>
    <div>platform -- {{ platform }}</div>

    <div v-if="platform">app: {{ isApp }} -- wechat: {{ isWechat }}</div>
    <div v-else>platform: {{ platform }} -- token: {{ token }} -- isToken: {{ isToken }}</div>

    <div v-if="isToken">token 存在且有效</div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: {
    // ...mapState({
    //   platform: state => state.platform,
    //   token: state => state.token,
    //   isToken: state => state.isToken
    // }),
    ...mapState(['platform', 'token', 'isToken']),
    ...mapGetters(['isApp', 'isWechat'])
  },
  methods: {
    add1() {
      this.$store.commit('ADD', {
        basic_num: 2
      });

      this.$store.dispatch('getUserInfo', {
        token: 111
      });
    },
    ...mapActions(['tokenCheck']),
    ...mapMutations({
    // add: {
      // type: 'ADD',
      // basic_num: 2
    // },
      increment: 'ADD'
    }),
    add2() {
      this.add({
        num: 100
      }).then((res) => {
        console.log(res);
        console.log(111);
      });
    },
    add3() {
      this.$store.dispatch('increment2', {
        num: 50
      }).then(() => {
        console.log(5566);
      });
    },
    add() {
      this.add_dis({
        num: 88
      }).then((res) => {
        console.log('is ok !!!', res);
      });
    },
    increment3() {
      this.$store.dispatch('increment3');
    },
    ...mapActions(['increment']),
    ...mapActions({
      add_dis: 'increment2'
    })
  },
  created() {
    this.tokenCheck();
  }
};
</script>

<style scoped lang="scss">
</style>
