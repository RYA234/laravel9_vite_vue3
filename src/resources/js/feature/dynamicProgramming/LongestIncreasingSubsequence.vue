<script setup>




/**
 * 動的計画法 p63 ２つの最長部分増加文字列の長さを計算する。計算量O(n^2)の場合
 * @param {Number} number - 数列の数
 * @param {Array} numberArray - 数列
 * @return {Number}  -最長列の長さ
 */
const calIncreasingNumber1 = (number,numberArray) =>{
    let dp = new Array(number + 1).fill(0);
    let loopCount = 0;
    console.log(`ループ数|i|j|条件|dp[i+1]の計算式|dp[i+1]の値`);
    console.log(`--|--|-----|----|-----|---`);
    for(let i=0; i < number; i++){
        dp[i+1] = 1;
        for(let j=0; j<i; j++){
            loopCount++;
            if(j < i && numberArray[j] < numberArray[i]){
                dp[i+1] =  Math.max(dp[i+1],dp[j] + 1);
                console.log(`${loopCount} | ${i}|${j}| j < i && numberArray[j] < numberArray[i] </br> ${j} < ${i}   numberArray[${j}]\\(${numberArray[j]}) < numberArray[${i}]\\(${numberArray[i]}) |dp[i+1] =  Math.max(dp[i+1],dp[j] + 1) </br> dp[${i}+1] = dp[${i}+1](= ${dp[i+1]}), dp[${j}](= ${dp[j]}) + 1 | dp[${i}+1] = ${dp[i+1]}`)
            }
            else
            {
                console.log(`${loopCount} | ${i}|${j}| j >= i && numberArray[j] >= numberArray[i] </br> ${j} >= ${i}   numberArray[${j}]\\(${numberArray[j]}) >= numberArray[${i}]\\(${numberArray[i]}) |計算なし|計算なし  `)
            }
        }
    }
    console.log(dp);
    return dp[number];
}

defineExpose({
    calIncreasingNumber1
})

</script>

<template>

</template>


<style>

</style>
