import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
            status: '',
            data: '', 
            token: sessionStorage.getItem('token') || '',
            user: {}
          },
    mutations: {
        auth_request (state) {
            state.status = 'loading'
        },
        auth_success (state, token) {
            state.status = 'success'
            state.token = token
        },
        auth_review (state, data) {
            state.status = 'success'
            state.data = data
        },
        logout (state) {
          state.status = ''
          state.token = ''
        }
    },
    actions: {
        login ({commit}, user) {
            // axios.defaults.headers.common['Authorization'] = token
            commit('auth_request')
            return axios({ url: process.env.VUE_APP_API_SIGN, data: user, method: 'POST' })
        },
        logout ({commit}) {
            commit('logout')
            sessionStorage.removeItem('token')
            // delete axios.defaults.headers.common['Authorization']
        }
        // getHashCodeReview ({ commit }, hasCode) {
        //     commit('auth_request')
        //     return axios.get(process.env.VUE_APP_API_REVIEW + `detail?hashCd=` + hasCode + `&langCd=in`)
        // },
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    }

})
