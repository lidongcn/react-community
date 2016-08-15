const initalState = {
    show:'show'
}
module.exports = function(state=initalState,action){
    const data = action.data;
    switch (action.type){
        case 'showdialog':
            state.show='show';
            return Object.assign({},state,{});
        case 'hidedialog':
            state.show='hide';
            return Object.assign({},state,{});
        default:
            return state;
    }
}