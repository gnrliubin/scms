const app = {
    namespaced: true,
    state:{
        asideIsCollapse:false,
    },
    mutations:{
        asideToggle(state)  {
            state.asideIsCollapse=!state.asideIsCollapse
        }
    }
}

export default app