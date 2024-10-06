<template>

</template>

<script setup>
import { ref } from 'vue';
    //
    /** p97 隣接行列を使った配列ダイクストラ法
     * @param destination{Number}  目的値の番号
     * @param vertexCount{Number}  頂点の数
     * @param edgeCount{Number}  辺の数
     * @return {Number} 最短経路のコスト
     */
    const  cal= (destination,vertexCount,edge,goal) =>{
        const INF = 1000;

        let isUsed = Array(vertexCount).fill(false);
        let minDistance = Array(vertexCount).fill(INF);
        minDistance[destination] = 0;
        console.log(`u|v|行動 or 条件 | 結果|minDistance`)
        console.log(`-------|-|------------------------|---------|------|`)

        while(true){
            let v = -1;
            // まだ使用されてない頂点のうち、最小のものを探す。
            for(let u=0; u<vertexCount; u++){
                if(!isUsed[u] && (v == -1 || minDistance[u] < minDistance[v])) {
                    console.log(`${u}|${v}|頂点${u}が使用されていないかつ最小 </br> !isUsed[u]（!${!isUsed[u]}） minDistance[u]（${minDistance[u]}） < minDistance[v]（${minDistance[v]}） | v = u（${u}） |`)
                    v = u;
                }
            }
            // 最小の者が見つからない場合は終了
            if(v == -1)break;

            isUsed[v] = true;
            // vから行ける頂点に対して、最小のコストを更新する。
            for(let u = 0; u< vertexCount; u++){
                console.log(`${u}|${v}|頂点${v}から行ける頂点に対して、最小のコストを更新する。 </br> minDistance[u]（${u}）, minDistance[v]（${v}） + edge[v][u]</br> ${minDistance[u]}, ${minDistance[v]}+${edge[v][u]}  | minDistance[u]（${u}）=${Math.min(minDistance[u], minDistance[v] + edge[v][u])} |`)
                minDistance[u] = Math.min(minDistance[u], minDistance[v] + edge[v][u]);
            }
        }
        console.log(minDistance);
        return minDistance[goal];
    }
    defineExpose({
        cal
    })
</script>
