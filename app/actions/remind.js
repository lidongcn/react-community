export function successremind(message,action=''){
    return {
        type:'success',
        data:{
            message:message,
            action:action
        }
    }
}
export function warnremind(message,action=''){
    return {
        type:'warn',
        data:{
            message:message,
            action:action
        }
    }
}