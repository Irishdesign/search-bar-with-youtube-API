export const UPDATE_ROWDATA = "UPDATE_ROWDATA"
export const UPDATE_CURRENT_DATA = "UPDATE_CURRENT_DATA"

// Define data types
export interface DataState {
    rowData: YTData[]
    currentData: YTData[]
}

export interface YTData {
    etag: string
    id: {
        kind: string
        videoId: string
    }
    kind: string
    snippet: {
        channelId: string
        channelTitle: string
        description: string
        liveBroadcastContent: string
        publishedAt: string
        thumbnails: {
            default: imgInfo
            high: imgInfo
            medium: imgInfo
        }
    }
}

export interface imgInfo {
    height: number
    url: string
    width: number
}

// define Action type and paylaod type

interface UpadteDataAction {
    type: typeof UPDATE_ROWDATA
    payload: YTData[]
}
interface setCurrentDataAction {
    type: typeof UPDATE_CURRENT_DATA
    payload: {
        page: number
    }
}

export type DataActionTypes = UpadteDataAction | setCurrentDataAction
