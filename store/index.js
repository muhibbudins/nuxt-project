import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      article: {}
    },
    mutations: {
      setArticle (state, data) {
        state.article = data
      }
    }
  })
}

export default createStore
