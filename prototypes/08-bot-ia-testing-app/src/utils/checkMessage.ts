


export const checkMessage = (message:string | null ,array:string[] | null):boolean | undefined=>{

    if(message === null || array === null) return undefined

    for (let i = 0; i < array.length; i++) {
        if(message.toLowerCase().includes(array[i])){
            return true
        }
    }
}