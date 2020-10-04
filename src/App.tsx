import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getYTdata } from "./utilities/getYTdata"
import { YTData } from "./store/types"
import Pagenation from "./components/pagenation"
import Card from "./components/card"
import "./style.scss"
import SearchIcon from "@material-ui/icons/Search"
import CircularProgress from "@material-ui/core/CircularProgress"
function App() {
    const { useEffect, useState } = React
    const [keyWord, setKeyword] = useState("Hot Music")
    const [page, setPage] = useState(1)
    const currentData: YTData[] = useSelector((state) => state.currentData)
    const rowData: YTData[] = useSelector((state) => state.rowData)
    const [isloaging, setIsloading] = useState(true)
    const dispatch = useDispatch()
    const updateRowData = (data: YTData[]) => {
        dispatch({
            type: "UPDATE_ROWDATA",
            payload: data,
        })
    }
    const updateCurrentData = (page) => {
        dispatch({
            type: "UPDATE_CURRENT_DATA",
            payload: {
                page: page,
            },
        })
    }

    useEffect(() => {
        getYTdata().then((r) => {
            updateRowData(r.items)
            // updateCurrentData(1)
        })
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        if (rowData) {
            updateCurrentData(1)
            setIsloading(false)
        }
        //eslint-disable-next-line
    }, [rowData])
    useEffect(() => {
        updateCurrentData(page)
        //eslint-disable-next-line
    }, [page])

    const handleSearch = () => {
        setIsloading(true)
        getYTdata(keyWord).then((r) => {
            updateRowData(r.items)
        })
    }
    const handleChangePage = (p) => {
        setPage(p)
    }

    return (
        <div className="App">
            <div className="searchBar">
                <div className="searchInput">
                    <input
                        defaultValue={keyWord}
                        onChange={(e) => {
                            setKeyword(e.currentTarget.value)
                        }}
                    />
                    <div
                        className="searchBtn"
                        onClick={() => {
                            handleSearch()
                        }}
                    >
                        <SearchIcon />
                    </div>
                </div>
            </div>
            {isloaging ? (
                <div className="progress">
                    <CircularProgress color="secondary" />
                </div>
            ) : (
                <>
                    <div className="cardContainer">
                        {currentData.map((d) => {
                            return <Card key={d.etag} data={d} />
                        })}
                    </div>
                    <div className="pages">
                        <Pagenation
                            handleOnChange={(e, p) => {
                                handleChangePage(p)
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default App
