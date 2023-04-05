//Time Complexity:O(n log(n)) Space Complexity: O(log(n))

export default function smallestPositiveIntegerNotOccur(arr) {
    let n = arr.length;

    const present = new Array(n + 1).fill(false);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] <= n)
            present[arr[i]] = true;
    }

    for (let i = 1; i <= n; i++) {
        if (!present[i])
            return i;
    }

    return n + 1;
};











