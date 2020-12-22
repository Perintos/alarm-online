export const createArrayUnsignedInt = (number) => {
    let array = [];

    for(var i = 0 ; i < number ; i++){
        array.push(i);
    }

    return array;
}

export const findVideoCode = (url) => {
    if(url.includes("=") && url.includes("&"))
        return url.split("=")[1].split("&")[0]
    else
        return null;
}