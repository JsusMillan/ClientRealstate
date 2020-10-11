import axios from 'axios'

export default {
  signIn({ commit }, playload) {
    commit('SET_LOADING', true)
    axios
      .post('http://localhost:1337/auth/local', playload)
      .then((response) => {
        this.selectPais = response.data
      })
      .catch((errors) => console.log(errors))
  },
  signUp({ commit }, account) {
    commit('SET_LOADING', true)
  },
  signOut({ commit }) {
    commit('SET_USER', null)
    this.$router.push('/')
  },
}
