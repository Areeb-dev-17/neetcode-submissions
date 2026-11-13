class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const count ={}
       const freq = Array.from({length:nums.length + 1},()=>[]) // creates frequency array  
       for(const n of nums)
       {
        count[n] = (count[n] || 0) +1; //find the count of every element on nums array 
       }
       for(const n in count)
       {
        freq[count[n]].push(parseInt(n)); //put it freuency array 
       }
       const res=[]
       for(let i = freq.length-1;i>0;i--)
       {
            for(const n of freq[i] )
            {
                res.push(n)
                if(res.length ==k)
                {
                    return res
                }
            }
       }

    }
}
