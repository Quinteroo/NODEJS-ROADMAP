


export const checkMessage = (message:string | null ,array:string[] | null):boolean | undefined=>{

    if(message === null || array === null) return undefined

    let messageSplit:string[] = message.toString().toLowerCase().split(" ")

    for (let i = 0; i < array.length; i++) {
        if(messageSplit.includes(array[i])){
            return true
        }
    }
}