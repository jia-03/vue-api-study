<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <input type="text" name id v-model="myName" />
    <button @click="changeName">changeName</button>
    <ul>
      <li v-for="(item,index) in testList" :key="index">{{item.name}}</li>
    </ul>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      myName: "jia",
      testList: [
        { name: "jia-1" },
        { name: "jia-2" },
        { name: "jia-3" },
        { name: "jia-4" },
        { name: "jia-5" }
      ]
    };
  },
  methods: {
    // async changeName() {
    //   console.log(this.myName);
    //   let result = await this.$axios.common
    //     .getSongInfo({
    //       keyWords: "海阔天空"
    //     })
    //     .then(res => {
    //       console.log(res);
    //     });
    //     console.log(result)
    // }
     changeName() {
      this.$Toast({
            content: 'myToast',
            know: () => {
              alert(1)
            }
          })
    }
  }
};
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
