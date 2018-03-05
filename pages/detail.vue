<template>
  <div class="mt-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-8">
          <img :src="article.urlToImage" alt="Card image cap" class="img-fluid">
          <p class="card-text"><small class="text-muted">{{ article.publishedAt }} - {{ article.author }} - {{ article.name }}</small></p>
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="card-text">{{ article.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  methods: {
    async getData () {
      await setTimeout(() => {
        if (this.$store.state && this.$store.state.article.name !== "") {
          let states = this.$store.state.article
          states.name = states.source ? states.source.name : ''
          this.article = states
        }
      }, 1000)
    }
  },
  mounted () {
    this.getData().then(() => {
      console.log('News loaded')
    })
  }
}
</script>
