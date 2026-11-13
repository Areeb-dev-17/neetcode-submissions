class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const scount ={}
        const tcount={}
     
        if(s.length!==t.length){
            return false
        }
        for(let i=0;i<s.length;i++)
        {
            scount[s[i]] = (scount[s[i]] || 0) + 1 
            tcount[t[i]] = (tcount[t[i]] || 0) + 1
        }

        for(const key in scount)
        {
           if(scount[key] !== tcount[key]){
            return false
           }
           
        }
        return true

    }

}
