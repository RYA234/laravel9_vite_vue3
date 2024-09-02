<template>

</template>

<script setup>
import { ref } from 'vue';
    //
    /**
     * pp67 重複組み合わせ　
     * @param n {Number} 品物の種類
     * @param m {Number}  選ぶ個数
     * @param a{Array} i番目の個数
     * @return {Number} 組み合わせの総数
     */
    const  cal = (n,m,a) =>{
        let dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));
        for(let i=0;i <= n; i++){
            dp[i][0] = 1;
        }
        let loopCount = 0;
        console.log(`ループ数|i|j|条件|dp[i+1][j]の計算式|dp[i+1][j]の値`);
        console.log(`--|--|-----|----|-----|---`);
        for(let i=0; i < n; i++){
            for(let j=1; j<=m; j++){
                loopCount++;
                if(j - 1 - a[i] >= 0){
                    dp[i+1][j] = dp[i+1][j-1] +dp[i][j]-dp[i][j-1-a[i]]
                    console.log(`${loopCount}|${i} | ${j} | j - 1 - a[i] >= 0 </br> ${j} - ${1} - a[${i}] ( =${a[i]}) >= 0 |  dp[i+1][j-1] +dp[i][j]-dp[i][j-1-a[i]]</br>dp[${i}+1][${j}-1]( = ${dp[i+1][j-1]}) + dp[${i}][${j}]( = ${dp[i][j]}) - dp[${i}][${j}-1-a[${i}]]( = ${dp[i][j-1-a[i]]})  | dp[${i+1}][${j}]  = ${dp[i+1][j]}`)
                }else{
                    dp[i+1][j] = dp[i+1][j-1] +dp[i][j];
                    console.log(`${loopCount}|${i} | ${j} | j - 1 - a[i] < 0 </br> ${j} - ${1} - a[${i}] ( =${a[i]}) < 0 |  dp[i+1][j-1] +dp[i][j]</br>dp[${i}+1][${j}-1]( = ${dp[i+1][j-1]}) + dp[${i}][${j}]( = ${dp[i][j]}) | dp[${i+1}][${j}]  = ${dp[i+1][j]}`)
                }
            }
        }
        console.log(dp);
        return dp[n][m];
    }
    defineExpose({
        cal
    })
</script>
