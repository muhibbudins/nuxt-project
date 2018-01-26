<template>
  <div>
    <!-- Navigation -->
    <Navigation/>
    <!-- Content -->
    <div class="container content">
      <div class="row">
        <div class="col-md-9 col-lg-9">
          <!-- Content -->
          <Banner />
          <nuxt/>
        </div>
        <div class="col-md-3 col-lg-3">
          <!-- Sidebar -->
          <div class="sidebar">
            <h4>Title of sidebar</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, porro repudiandae. Tempora, ab nostrum dolorum temporibus maiores architecto, distinctio dolorem id modi, neque atque ipsam dicta sit eum non. Sed.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="footer">
      Copyright here
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import Banner from '~/components/banner.vue'

export default {
  components: {
    Navigation,
    Banner
  }
}
</script>
