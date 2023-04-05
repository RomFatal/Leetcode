//Time Complexity:O(n log(n)) Space Complexity: O(log(n))

function quickSort(array) {
    let left = [], right = [], pivot = array[0]
    if (array.length <= 1)
        return array;


    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot)
            left.push(array[i])
        else
            right.push(array[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

export default function smallestPositiveIntegerNotOccur(array) {
    let min = 1;
    array = quickSort(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= min)
            if (array[i] == min)
                min = array[i] + 1;
            else
                return min;
    }
    return min;
};











