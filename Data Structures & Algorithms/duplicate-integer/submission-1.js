class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var set = new Set()
        var result = false
        for(let i=0;i<nums.length;i++)
        {
            if(set.has(nums[i]))
            {
                result = true
            }
            else{
                set.add(nums[i])
            }
        }
        return result
    }
}
