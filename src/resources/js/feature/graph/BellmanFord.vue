<template>

</template>

<script setup>

    //
    /** p95 グラフ ベルマンフォード法
     * @param start{Number}  目的値の番号
     * @param vertexCount{Number}  頂点の数
     * @param edgeCount{Number}  辺の数
     * @param edge{Array}  隣接リスト 頂点数×頂点数の２次元配列  要素0:始点 要素1:終点 要素2:コスト
     * @param goal{Number}  目的値の番号
     * @return {Number} 最短経路のコスト
     */
    const  bellmanford = (start,vertexCount,edgeCount,edge,goal) =>{

        const from = 0;
        const to = 1;
        const cost =2;
        const INF = 1000000;
        let minDistance = Array(vertexCount).fill(INF);
        minDistance[start] = 0;
        let loopCount = 0;
        console.log(`ループ数|i|辺情報[始点、終点、コスト]|isUpdated|minDistance[e[from]] != INF  </br>&& (minDistance[e[to]] > minDistance[e[from]] + e[cost])|minDistance[e[to]]の式|minDistance[e[to]]の値|minDistance配列の値|`)
        console.log(`-------|-|------------------------|---------|------|-------|---|----|`)
        while(true){
           let isUpdated = false;
            for(let i=0; i< edgeCount; i++){
                loopCount++;
                let e = edge[i];
                let temp = minDistance[e[to]]; // console.logに表示する用
                if(minDistance[e[from]] != INF && (minDistance[e[to]] > minDistance[e[from]] + e[cost])) {

                    minDistance[e[to]] = minDistance[e[from]] + e[cost];
                    isUpdated  = true

                    console.log(`${loopCount}|${i}|[${e}]| ${isUpdated}| ${minDistance[e[from]]} != ${INF} </br> ${temp} > ${minDistance[e[from]]} + ${e[cost]} </br> true|minDistance[e[${from}]( =${e[cost]})] + e[${cost}] (= ${e[cost]})</br> ${minDistance[e[from]]} + ${e[cost]}|${minDistance[e[to]]} |${minDistance}`)
                }else{
                    console.log(`${loopCount}|${i}|[${e}]| ${isUpdated}| ${minDistance[e[from]]} != ${INF} </br> ${temp} > ${minDistance[e[from]]} + ${e[cost]} </br> false|計算しない|計算しない|${minDistance}`)
                }
            }
            if(!isUpdated) {
               break;
            }
        }
        console.log(minDistance);

        return minDistance[goal];
    }
    defineExpose({
        bellmanford
    })
</script>
