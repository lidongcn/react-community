export function successremind(message,action=''){
    console.log('fsd');
    return {
        type:'success',
        data:{
            message:message,
            action:action
        }
    }
}