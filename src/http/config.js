import http from '@/http/request.js'
const URL='https://api.apiopen.top/'
let API ={
    giveList:data=>http({
        baseURL:URL+'videoCategoryDetails?id=14',
        method:'get'
    }),
    postList:data=>http({
        baseURL:URL+'videoCategoryDetails?id=14',
        method:'post',
        // data:{
        //     id:data
        // }
    }),
    getLive:data=>http({
        baseURL:URL+'musicRankings',
        method:'get'
    })
}
export default API