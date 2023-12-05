import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            count: 666
        }
    },
    getters: {

    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    actions: {

    }
})

export default store