//using auxiliary array Time Complexity: O(N) Auxiliary Space: O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export default function isomorphicStrings(s, t) {

    if (s.length != t.length)
        return false;

    let mapsChar = new Array(256).fill(-1), marked = new Array(256).fill(false);

    for (let i = 0; i < s.length; i++) {
        if (mapsChar[s[i].charCodeAt()] == -1 && marked[t[i].charCodeAt()]==false)
        {
            mapsChar[s[i].charCodeAt()] = t[i].charCodeAt();
            marked[t[i].charCodeAt()]=true;
        }
        else if (mapsChar[s[i].charCodeAt()] != t[i].charCodeAt())
            return false;
    }
    return true;
}



