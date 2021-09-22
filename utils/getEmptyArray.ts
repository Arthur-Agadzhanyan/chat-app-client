export function getEmptyArray(num: number): null[]{
    const array = []

    for (let i = 0; i < num; i++) {
        array[i]= null;
    }

    return array
}