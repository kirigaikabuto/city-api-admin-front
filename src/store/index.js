import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        error: null
    },
    mutations: {
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        async getApplications() {
            //const key = "de05331f-63d1-4141-bb4a-d9abbd82ead8"
            //const requestOptions = {};
            const url = "http://localhost:8080/application/"
            return fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw Error(response.body);
                    }
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    getters: {
        error: s => s.error
    },
    modules: {}
})
