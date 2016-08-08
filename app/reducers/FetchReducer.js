const initalState = {
    global:'hide',
    postlist:'hide'
}
module.exports = function(state=initalState,action){
    const data = action.data;
    switch (action.type){
        case 'globalloading':
            return Object.assign({},state,{global:'loading'});
        case 'postlistshow':
            return Object.assign({},state,{postlist:'loading'});
        case 'postlisthide':
            return Object.assign({},state,{postlist:'hide'});
        default:
            return state;
    }
}