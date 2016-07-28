const initalState = {
    test:'hello world'
}
module.exports = function(state=initalState,action){
    const data = action.data;
    switch (action.type){
        case 'test':
            return Object.assign({},state,{});
        default:
            return state;
    }
}