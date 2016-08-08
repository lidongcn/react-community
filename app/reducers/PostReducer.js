const initalState = {
    list:[]
}
module.exports = function(state=initalState,action){
    const data = action.data;
    switch (action.type){
        case 'setlist':
            state.list=state.list.concat(data);
            return Object.assign({},state,{});
        default:
            return state;
    }
}