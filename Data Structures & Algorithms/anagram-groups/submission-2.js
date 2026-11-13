class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for(let s of strs)
        {
            const StrCount = new Array(26).fill(0)
            for( let c of s)
            {
                StrCount[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = StrCount.join(',')
            if(!res[key])
            {
                res[key]=[]
            }
            res[key].push(s)

        }
        return Object.values(res)
    }
}
