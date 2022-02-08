export const filterByParam = (arr, param) => {
    const data = [...new Set(arr.map(item => item[param]))].sort()
    return data
}

export const replaceUrlInArray = (arr, urls) => {
    console.log(arr)
    console.log(urls)
    return urls.map((x, i) => x.url = arr[i])
}