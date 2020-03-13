/* eslint-disable */
import Http from '../../axios'
let baseUrl ='http://musicapi.leanapp.cnsearch'

const api = {
getSongInfo(data={}) {
    return  Http.ajax({
            baseUrl,
            method: 'GET',
            url: '/search',
            data: data
        })
}
}
export default api
