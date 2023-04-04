//Time Complexity: Ω(n log(n)) Θ(n log(n)) O(n^2)  Auxiliary Space: O(log(n))

export default function quickSort(arr) {

    if (arr.length <= 1)
        return arr;

    let left = [], right = [], pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot)
            left.push(arr[i])
        else
            right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}