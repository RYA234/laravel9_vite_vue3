<template>

</template>

<script setup>
import { ref } from 'vue';


    // ２部グラフ判定 p93
    /**
     * @param number{Number}頂点の数
     * @param graphArray{Array} 辺の情報
     * @return ans {String} Yes :二色以内で塗り分け可能 No: 二色以内で塗り分け不可能
     */
    const  checkBipartite = (number,graphArray) =>{
        let i = 0 ;
        const colors = new Array(number).fill(0);

        //　深さ優先探索　他の頂点とを網羅するために使用する。
        /**
         * @param v{Number} 頂点番号
         * @param c{Number}} 色の情報 -1or1が入る。
         * @return ans {String} true :二色以内で塗り分け可能 false: 二色以内で塗り分け不可能
         */
        const dfs= (v,c) =>{
            // console.log(`${v}の色を${c}色に塗る`);
            colors[v] = c;
            console.log(`${i}|なし|def(${i},${c}) | |${v}を${c}色に塗る|${colors}`);
            for(let j = 0;j<graphArray[v].length;j++){
                // 頂点vに対して、隣接する頂点毎にループする。
                // 隣接している頂点が同じ色の場合
                if(colors[graphArray[v][j]] == c){
                    console.log(`${i}|${j}|def(${i},${c}) | colors[graphArray[v][j]] == c  </br> colors[graphArray[${v}][${j}]]（ ＝${colors[graphArray[v][j]]}） == ${c}|${v}と${graphArray[v][j]}は同じ${c}色${colors}`);
                    return false;
                }
                // 隣接している頂点が塗られていない場合異なる色で塗る。
                if(colors[graphArray[v][j]] == 0 && !dfs(graphArray[v][j],-c)){
                    console.log(`${i}|${j}| def(${graphArray[v][j]},${-c} | colors[graphArray[v][j]] == 0  </br> colors[graphArray[${v}][${j}]]（ ＝${colors[graphArray[v][j]]}） == 0 |${v}は塗り替えられていないので${-c}色に塗る|${colors}`);
                    return false;
                }
                console.log(`${i}|${j}|def(${i},${c})| colors[graphArray[v][j]] !== 0 and c  </br> colors[graphArray[${v}][${j}]]（ ＝${colors[graphArray[v][j]]}） !== 0  and ${c}|${v}と${graphArray[v][j]}は既に異なる色に塗られている|${colors}`);
            }
            // 全ての色が塗れた場合。
            // console.log("色が塗れた場合");
            console.log(`${i}|なし|def(${i},${c}) | |すべての頂点が塗れた|${colors}`);
            return true;
        }
        // 全ての頂点に対してループする。
        console.log(`i|j|!dfs(i,1)|条件|行動|graphの色`)
        console.log(`-|-|---------|---|----|-------`)
        for( i= 0;i<number; i++){
            if(colors[i] == 0){
                if(!dfs(i,1)){
                    console.log("No");
                    return "No";
                }
            }
        }
        console.log("Yes");
        return "Yes";
    }
    defineExpose({
        checkBipartite
    })
</script>
