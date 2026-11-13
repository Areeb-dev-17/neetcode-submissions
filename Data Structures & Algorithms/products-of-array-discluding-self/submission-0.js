class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
          //first find the prefix 
          let n = nums.length 
          let res =new Array(n).fill(1)
          for(let i=1;i<n;i++)
          {
            res[i] = res[i-1] * nums[i-1] //[1,1,2,8]
          } 
          //postfix
          let postfix =1
          for(let i=n-1;i>=0;i--)
          {
                res[i] *= postfix
                postfix *= nums[i]
          }
          return res
    }
}
