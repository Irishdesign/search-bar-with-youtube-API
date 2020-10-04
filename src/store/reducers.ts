import { DataState, DataActionTypes, UPDATE_ROWDATA, UPDATE_CURRENT_DATA } from "./types"

const initialState: DataState = {
    rowData: [],
    currentData: [],
}

export function dataReducer(state = initialState, action: DataActionTypes): DataState {
    switch (action.type) {
        case UPDATE_ROWDATA:
            return {
                ...state,
                rowData: action.payload,
            }
        case UPDATE_CURRENT_DATA:
            const { page } = action.payload
            const startID = (page - 1) * 10
            const currentList = state.rowData.slice(startID, startID + 10)
            return {
                ...state,
                currentData: currentList,
            }
        default:
            return state
    }
}
