import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) return
  window.onNuxtReady((nuxt) => {
    createPersistedState({
      paths: ['article']
    })(store)
  })
}
