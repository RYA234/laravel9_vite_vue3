

<template>

</template>

<script setup>

    /**
     * 貪欲法2 p43  空間スケジューリング
     * @param number{Number} 区間の数
     * @param start{Array[Number]} 区間の始まり
     * @param termination{Array[Number]} 区間の終わり
     * @return {Number} 参加した区間の数
     */
    const  scheduling = (number,start,termination) =>{
        let stArray = new Array(number)
        const START_NUM = 0
        const END_NUM = 1
        let ans = 0;
        for(let i=0;i<number;i++){
            stArray[i] = [start[i],termination[i]]
        }
        // tに対して昇順ソート
        stArray = stArray.sort((a,b) => a[1] - b[1])
        let tempT = stArray[0][END_NUM]
        ans++;
        let loopCount = 0;
        console.log(`貪欲法2 区間スケジューリング 状態遷移図`);
        console.log(`i|tempT < stArray[i][START_NUM]|ans|`);
        console.log(`---|-----|----`);
        // i=0のときからスタート
        for(let i=0; i<number;i++){
            // 現在の区間終わりよりも値が大きい区間始まりを探索する
            if(tempT < stArray[i][START_NUM]){
                tempT = stArray[i][END_NUM]
                ans++;
                console.log(` ${i} |${tempT} < ${stArray[i][START_NUM]} 〇 |${ans}`);
            }else{
                console.log(` ${i} |${tempT} < ${stArray[i][START_NUM]} × |${ans}`);
            }
        }
        return ans;
    }
    defineExpose({
        scheduling
    })
</script>
