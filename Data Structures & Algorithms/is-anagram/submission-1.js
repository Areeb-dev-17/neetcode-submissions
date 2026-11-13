class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
        const S ={}
        const T = {}
        for(let i=0;i<s.length;i++)
        {
            S[s[i]] = (S[s[i]] || 0) + 1
            T[t[i]] =(T[t[i]] || 0) +1
        }
        for(const key in S)
        {
            if(S[key]!==T[key])
            {
                return false
            }
        }
        return true
    }
}
