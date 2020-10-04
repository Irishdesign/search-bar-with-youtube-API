export const getYTdata = (text: string = "Hot Music") => {
    const API_KEY = "yourAPI_KEY"
    const many = 30
    let url =
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" +
        many +
        "&q=" +
        text +
        "&key=" +
        API_KEY

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((res) => res.json())
        .then((response) => {
            console.log("response", response)
            return response
        })
        .catch((error) => {
            console.log(" error: ", error)
        })
}
