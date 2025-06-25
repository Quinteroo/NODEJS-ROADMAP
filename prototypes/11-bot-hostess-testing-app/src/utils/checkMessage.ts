

export const checkMessage = (text:string | null, array:string[] | null):boolean | undefined =>{
    if(text === null || array === null) return undefined

    for (let i = 0; i < array.length; i++) {
        if(text.includes(array[i])){
            return true
        }
    }
}