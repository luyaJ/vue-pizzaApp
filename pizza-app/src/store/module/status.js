const state = {
   isLogin: false
}

const getters = {
  isLogin: state => state.isLogin
}

const mutations = {
  // 更改用户状态信息
  userStatus(state, user) {
    if(user) {
      state.currentUser = user
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
