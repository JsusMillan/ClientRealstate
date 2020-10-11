export const state = () => ({
  alert: '',
  loading: false,
})

export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_ALERT(state, payload) {
    state.alert = payload
  },
}

export const actions = {}
