import axios from 'axios'
export default ({
    namespaced: true,
    state: {
        data: [],

    },
    mutations: {
        INIT_DATA(state, payload) {
            state.data = payload;
        },
        ADD_DATA(state, payload) {
            state.data.push(payload);
        },
        DELETE_DATA(state, payload) {
            const index = state.data.findIndex(data => data._id == payload)
            state.data.splice(index, 1)
        },
    },
    getters: {
        getObj: state => state.obj,
        getData: state => state.data
    },
    actions: {
        init(context) {
            axios.get(`http://localhost:3000/api/employee`).then(res => {
                context.commit('INIT_DATA', res.data)
            })
        },
        initGetId(context, payload) {
            return new Promise(function (resolve, reject) {
                axios.get(`http://localhost:3000/api/employee/${payload}`).then(res => {
                    resolve(res.data)
                }).catch(err=>{
                    reject(err)
                })
            });
        },
        Post(context, payload) {
            return new Promise(function (resolve, reject) {
                axios.post(`http://localhost:3000/api/employee/crate`, payload).then(res => {
                    context.commit('ADD_DATA', res.data)
                    resolve(res)
                }).catch(err => {
                    reject(err);
                })
            });
        },
        Update(context,payload) {
            return new Promise(function (resolve, reject) {
                axios.put(`http://localhost:3000/api/employee/update/${payload.id}`, payload.obj).then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err);
                })
            });
        },
        Delete(context, payload) {
            return new Promise(function (resolve, reject) {
                axios.delete(`http://localhost:3000/api/employee/delete/${payload}`).then(res => {
                    context.commit('DELETE_DATA', payload)
                    resolve(res)
                }).catch(err => {
                    reject(err);
                })
            });
        },
    }
})