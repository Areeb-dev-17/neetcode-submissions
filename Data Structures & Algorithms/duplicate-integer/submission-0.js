class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const array = new Set()
        for(const num of nums){
            if(array.has(num))
            {
                return true
            }
            array.add(num)
           
        }
         return false 
    }
}
