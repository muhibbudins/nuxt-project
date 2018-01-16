<template>
  <div>
    <h2>Hello Dude!</h2>
    <p>{{ message }}</p>
    <input type="text" v-model="message">
    <button @click="showAlert">Show Message</button>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      message: 'Nuxt it\'s so cool..'
    }
  },
  methods: {
    showAlert (e) {
      alert(this.message)
    }
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h2 {
  font-size: 48px;
  color: #389acd;
}
p {
  font-size: 18px;
  color: #ababab;
}
</style>
