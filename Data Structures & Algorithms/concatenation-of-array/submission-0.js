class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let size = nums.length;
        let ans = new Array(2 * size);
        for (let i=0 ; i<size; i++){
            ans[i]= nums[i];
            ans[i+size]=nums[i];
        }
        return ans;
    }
}
