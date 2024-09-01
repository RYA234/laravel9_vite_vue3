<!-- 動的計画法 p66 分割数 -->
<script setup>
import { ref } from 'vue';

/**
 * 　分割数を計算する
 *
 * @param {Number} n - 品物の数
 * @param {Array} m -  分割する数
 * @param {Number} M  - 割った数
 * @return {Number}  -価値の総和
 */
const calDivisionNumber = (n,m,M) =>{
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    let loopCount = 0;
    console.log(`ループ数|i|j|条件|resの計算式|resの値`);
    console.log(`--|--|-----|----|-----|---`);
    dp[0][0] = 1;
    for(let i = 1;i <= m; i++){
        for(let j = 0; j <= n;j++){
            if(j - i >= 0){
            dp[i][j] = (dp[i-1][j] + dp[i][j-i]) % M;
            loopCount++;
            console.log(`${loopCount}|${i}|${j}|j - i >0 </br> ${j}-${i} >0|dp[i-1][j] + dp[i][j-i] </br> dp[${i} -1]\\[${j}](=${dp[i-1][j]}) +dp[${i}]\\[${j}-${i}](=${dp[i][j-i]})|dp[${i}][${j}]</br>=${dp[i][j]} `)
        }
        else
        {
            dp[i][j] = dp[i - 1][j];
            loopCount++;
            console.log(`${loopCount}|${i}|${j}|j - i < 0 </br> ${j}-${i} < 0|dp[i-1][j] </br>dp[${i}-1][${j}] |dp[${i}][${j}]</br>=${dp[i][j]}`)
        }
        }
    }
    console.log(dp);
    return dp[m][n];
}




defineExpose({
    calDivisionNumber
})

</script>

<template>

</template>
