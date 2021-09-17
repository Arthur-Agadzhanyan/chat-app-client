export function getEmptyArray(num: number ){
    const array = []

    for (let i = 0; i < num; i++) {
        array[i]= null;
    }

    return array
}