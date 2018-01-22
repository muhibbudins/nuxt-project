<template>
  <div>
    <!-- Navigation -->
    <Navigation/>
    <!-- Content -->
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-lg-9">
          <!-- Content -->
          <Banner />
          <nuxt/>
        </div>
        <div class="col-md-3 col-lg-3">
          <!-- Sidebar -->
          <h4>Ini side bar</h4>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <h4>Ini footer</h4>
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
