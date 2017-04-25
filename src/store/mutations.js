import * as types from './mutation-types'

export default {
    [types.SAVE_PLAN](state, plan) {

        const user = {
            avatar: 'https://avatars0.githubusercontent.com/u/12269185',
            name: 'Junen'
        }

        state.plans.push(Object.assign({}, plan, user))
        localStorage.setItem('plans', JSON.stringify(state.plans))

    },
    [types.EDIT_PLAN](state, editData) {
        Object.assign(state.plans[editData.pId], editData.plan)
        localStorage.setItem('plans', JSON.stringify(state.plans))
    },
    [types.DELETE_PLAN](state, index) {
        state.plans.splice(index, 1)
        localStorage.setItem('plans', JSON.stringify(state.plans))
    },
    [types.ADD_TOTALTIME](state, time) {
        state.totalTime += ~~time
        localStorage.setItem('totalTime', state.totalTime)
    },
    [types.SUBTRACT_TOTALTIME](state, time) {
        state.totalTime -= time
        localStorage.setItem('totalTime', state.totalTime)
    }
}