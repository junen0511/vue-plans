import * as types from './mutation-types'

export default {
    savePlan({
        commit
    }, plan) {
        commit(types.SAVE_PLAN, plan)
    },
    editPlan({
        commit
    }, plan) {
        commit(types.EDIT_PLAN, plan)
    },
    deletePlan({
        commit
    }, index) {
        commit(types.DELETE_PLAN, index)
    },
    addTotalTime({
        commit
    }, time) {
        commit(types.ADD_TOTALTIME, time)
    },
    subtractTotalTime({
        commit
    }, time) {
        commit(types.SUBTRACT_TOTALTIME, time)
    }
}