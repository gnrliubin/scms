const user = {
    state:{
        name:'游客',
        avatar:'/static/img/guest.png',
        department:0,
        permission:{

        },
    },
    mutations:{
        asideToggle(state)  {
            console.log('user modules')
        }
    }
}

export default user