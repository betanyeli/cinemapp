import * as _ from 'lodash'

export const filterByParam = (arr, param) => {
    const data = [...new Set(arr.map(item => item[param]))].sort()
    return data
}

export const replaceUrlInArray = (arr, urls) => {
    return _.unionBy(urls, arr, 'url')
}