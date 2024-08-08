<template>

</template>

<script setup>
import { ref } from 'vue';


    /**  コインチェックpp43
     *
     * @param sum{Number} 金額の合計額
     * @param coinNumbers{Number} 各コインの枚数 要素数は6 1番目は1円、2番目は5円,3番目は10円,4番目は50円,5番目は100円,6番目は500円
     * @return {Number} コインの最小枚数
     */
    const  check = (sum,coinNumbers) =>{
        const coinValue = [1,5,10,50,100,500];
        let ans = 0;
        let tempSum = sum;
        console.log(`貪欲法 コインチェック 状態遷移図`);
        console.log(`i|tempSum|ans`);
        console.log(`:--:|:---:|:-----:`);
        for(let i=5;i > 0; i--){
            let tempNumber = Math.min(Math.floor(tempSum/coinValue[i]),coinNumbers[i])
            tempSum -= tempNumber * coinValue[i]
            ans += tempNumber
            console.log(`${i} | ${tempSum} | ${ans}`);
        }
        return ans;
    }
    defineExpose({
        check
    })
</script>
