import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import Pagination from "@material-ui/lab/Pagination"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            "& > *": {
                marginTop: theme.spacing(2),
            },
        },
    })
)

interface IProps {
    handleOnChange: (e: any, page: number) => void
}
export default function BasicPagination(props: IProps) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Pagination
                count={3}
                color="secondary"
                onChange={(e, p) => {
                    props.handleOnChange(e, p)
                }}
            />
        </div>
    )
}
