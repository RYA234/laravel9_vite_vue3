<template>

</template>

<script setup>
import { ref } from 'vue';
    //
    /**最小全域木　プリム法　蟻本　p100
     *
     * @param graph{Array} 無向グラフ　隣接行列
     * @param vertexCount{Number} 頂点の数
     * @return {Number} 最小コスト
     */
    const  prim = (graph,vertexCount) =>{
        let INF = 1000;
        // 初期化
        let used = new Array(vertexCount).fill(false);
        let mincosts = new Array(vertexCount).fill(INF); //最短経路
        let res = 0;
        mincosts[0] = 0;
        let loopCount = 0;
        console.log(`loopCount|u|v|used|res|条件|結果`);
        console.log(`---------|-|-|----|---|----|---`);
        while(true){
            let v = -1;
            for(let u=0; u<vertexCount; u++){
                // 最小となる頂点を探す
                if(!used[u] && (v == -1 || mincosts[u] < mincosts[v])) {
                    loopCount++;
                    v = u;
                    console.log(`${loopCount}|${u}|${v}|${used}|${res}|最小となる頂点を探す </br>!used[u] && (v == -1 or mincosts[u] < mincosts[v]) </br>${!used[u]} and (${v} =1 )| ${mincosts[u]} < ${mincosts[v]}`);
                }
            }

            if(v == -1) break;
            used[v] = true;
            res += mincosts[v];

            for(let u = 0;u < vertexCount; u++){
                loopCount++;
                mincosts[u] = Math.min(mincosts[u], graph[v][u]);
                console.log(`${loopCount}|${u}|${v}|${used}|${res}|最小コストを求める  | mincosts[u] = Math.min(mincosts[u], graph[v][u])</br>${mincosts[u]}  = Math.min(${mincosts[v]},${graph[v][u]})`);
            }
        }
        return res;
    }
    const conscription = (graph,N,M,R) =>{
        let edges = new Array();
        for(let i=0;i<R;i++){
            edges.push([graph[i][0],N+graph[i][1],graph[i][2]]);
        }
        return (10000*(N+M) + kruskal(edges,8,10));
    }

    const kruskal = (graph,V,E) =>{
        const u=0 //頂点１
        const v=1 // 頂点２
        const cost=2; // コスト
        var parent= new Array(V);
        var rank = new Array(V);
        graph.sort(function(a,b){return a[cost] - b[cost];});
        console.log(graph);
        init(parent,rank,V);
        let res = 0;

        graph.sort((a,b) => a[2] - b[2]);

        for(let i=0; i<V; i++){
            let e = graph[i];
            console.log(parent)
            if(!same(parent,e[u],e[v])){
                unite(parent,rank,e[u],e[v]);
                console.log("連結しました。")
                res += e[cost];
            }
        }
        return res;
    }
    //
    /**
     * 親配列　深さ配列の初期化
     * @param par{Number} 参照渡し 親の配列 インデックス→要素の番号 値:インデックスの親の要素の値
     * @param rank{Number} 要素の深さ インデックス→要素の番号 値:要素の深さ
     * @param N{Number} 要素数
     */
     const  init = (par, rank, N) =>{
        for(let i = 0; i <= N;i++){
            par[i] = i;
            rank[i] = 0;
        }
    }

    //
    /**
     * 要素の親の値を返す
     * @param par{Number} 参照渡し 親の配列 インデックス→要素の番号 値:インデックスの親の要素の値
     * @param x{Number} 要素の番号
     * @param sum{Number} 金額の合計額
     * @return {Number} 要素の親の値
     */
    const  find = (par,x) =>{
        if(par[x] == x){
            return x;
        }else{
         return par[x] = find(par,par[x]);
        }
    }

    //
    /**
     * 要素を結合する
     * @param par{Number} 参照渡し 親の配列 インデックス→要素の番号 値:インデックスの親の要素の値
     * @param rank{Number} 要素の深さ インデックス→要素の番号 値:要素の深さ
     * @param x{Number} 要素の番号
     * @param y{Number} 要素の番号
     */
    const  unite = (par, rank, x,y) =>{

        x = find(par,x);
        // console.log(`x::${x}`)
        y = find(par,y);
        if( x == y) return;

        if(rank[x] < rank[y]){
            par[x] = y;
        }else{
            par[y] = x;
            if(rank[x] == rank[y]) rank[x]++;
        }
    }

    //
    /**
     *  要素の親が同じかどうかを判定する。
     * @param par{Number} 親の配列 インデックス→要素の番号 値:インデックスの親の要素の値
     * @param x{Number} 要素の番号
     * @param y{Number} 要素の番号
     * @return {Bool} 同じならtrue 異なるならfalse
     */
    const  same = (par,x,y) =>{
        return find(par,x) == find(par,y);
    }


    defineExpose({
        prim,kruskal,conscription
    })
</script>
