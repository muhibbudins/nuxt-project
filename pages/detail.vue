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
  computed: {
    article () {
      const article = this.$store.state.article
      article.name = article.source ? article.source.name : ''

      return article
    }
  }
}
</script>
