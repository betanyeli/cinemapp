import axios from 'axios'
import absoluteUrl from 'next-absolute-url'

export const getData = async (req) => {
    try {
        const { origin } = absoluteUrl(req)
        const { data } = await axios.get(`${origin}/api/movies`)
        return data
    } catch (error) {
        return error
    }
}