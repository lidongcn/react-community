const initalState = {
    action:'',
    message:'',
    type:'',
    open:false
}
module.exports = function(state=initalState,action){
    const data = action.data;
    switch (action.type){
        case 'success':
            return Object.assign({},state,{action:data.action,message:data.message,type:'success',open:true});
        default:
            return state;
    }
}