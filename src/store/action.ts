import { YTData, UPDATE_ROWDATA, DataActionTypes, UPDATE_CURRENT_DATA } from "./types"

export function updateRowData(newYTData: YTData[]): DataActionTypes {
    return {
        type: UPDATE_ROWDATA,
        payload: newYTData,
    }
}

export function setCurrentData(page: number): DataActionTypes {
    return {
        type: UPDATE_CURRENT_DATA,
        payload: { page: page },
    }
}
