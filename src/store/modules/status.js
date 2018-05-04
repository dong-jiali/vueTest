const status = {
  state: {
    nav: []
  },
  mutations: {
    SET_NAV_LIST (state, list) {
      state.nav = list
    }
  },
  actions: {
    getNavList ({commit, state}) {
      // 获取菜单列表
      console.log(commit)
      console.log(this)
      console.log(state)
    }
  }
}

export default status
