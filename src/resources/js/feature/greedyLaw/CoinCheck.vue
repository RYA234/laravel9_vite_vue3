<template>

</template>

<script setup>
import { ref } from 'vue';

    // コインの金額


    //コインチェック
    /**
     * @
     * @param sum{Number} 金額の合計額
     */

    //  let coinNumbers = new Array[5]
    const  check = (sum,coinNumbers) =>{
        const coinValue = [1,5,10,50,100,500];
        let ans =0;
        let tempSum = sum;
        for(let i=5;i > 0; i--){
            let tempNumber = Math.min(Math.floor(tempSum/coinValue[i]),coinNumbers[i])
           tempSum -= tempNumber * coinValue[i]
            ans += tempNumber
        }
        return ans;
    }
    defineExpose({
        check
    })
</script>
