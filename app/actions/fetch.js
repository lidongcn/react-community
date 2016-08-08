export function globalloading (){
    return {
        type:'globalloading',
        data:{global:'loading'}
    }
}
export function globalhide(){
    return {
        type:'globalhide',
        data:{global:'hide'}
    }
}

export function postlistshow(){
    return {
        type:'postlistshow',
        data:{postlist:'loading'}
    }
}
export function postlisthide(){
    return {
        type:'postlisthide',
        data:{postlist:'hide'}
    }
}