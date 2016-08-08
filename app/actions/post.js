import fetchie from '../helper/fetchie'
import {postlisthide,postlistshow} from './fetch'
export function getpostlist(page=1,size=3,callback){
    return dispatch =>{
        dispatch(postlistshow());
        fetchie
            .get('/post/list')
            .query({page:page,size:size})
            .then(function(res){
                if(res.code==200){
                    dispatch(postlisthide());
                    callback(res.data);
                }
                //console.log(res);
                //dispatch(setlist(res.data))
            })
    }
}
export function setlist(data){
    return {
        type:'setlist',
        data:data
    }
}