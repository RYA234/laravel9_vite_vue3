<template>

</template>

<script setup>
import { ref } from 'vue';
    //
    /**
     * Union-Find木を初期化する
     * @param par{Array} 各要素のの親
     * @param rank {Array} 各要素の木の深さ
     * @param N{Number} 要素の総数
     */
    const  init = (par, rank, N) =>{
        for(let i = 0; i <= N;i++){
            par[i] = i;
            rank[i] = 0;
        }
    }

    //
    /**
     *  Union-Find木の根を求める。
     * @param par{Array} 各要素のの親
     * @param x{Number} 求めたい要素
     */
    const  find = (par,x) =>{
        // 親と要素が一致する
        if(par[x] == x){
            console.log(`${par}|　| 親par[${x}]（=${par[x]}）と要素x（=${x}）が一致する場合、xを返す`)
            return x;
        }
        // 親と要素が一致しない場合、親を再帰的に探す
        else{
            console.log(`${par}|　| 親par[${x}]（=${par[x]}）と要素x（=${x}）が一致しない場合、親を再帰的に探す`)
            return par[x] = find(par,par[x]);
        }
    }

    //
    /**
     * Union-Find木を結合する
     * @param par{Array} 各要素のの親
     * @param rank {Array} 各要素の木の深さ
     * @param x{Number} 結合する要素1つ目
     * @param y{Number} 結合する要素2つ目
     */
    const  unite = (par, rank, x,y) =>{
        console.log(`par|rank|行動`);
        console.log(`--|---|---`)
        x = find(par,x);
        y = find(par,y);
        // 親が一致する場合、結合する必要がない
        if( x == y){
            console.log(`${par}|${rank}|親が一致しているため結合しないで終了する。`)
            return};

        //木の深さが深い方に結合する
        if(rank[x] < rank[y]){
            par[x] = y;
            console.log(`${par}|${rank}|1つ目の要素xより2つ目の要素yの木の深さが深いため、xの親をyに変更する。`);
        }else{
            par[y] = x;
            console.log(`${par}|${rank}|2つ目の要素yより1つ目の要素xの木の深さが深いため、yの親をxに変更する。`);
            if(rank[x] == rank[y]){rank[x] =  rank[x] + 1;}
        }
        console.log(`結合後の各要素の親:${par}`)
        console.log(`結合後の各要素の木の深さ:${rank}`)
    }

    //
    /**
     * Union-Find木で同じ集合に属するかを判定する。
     * @param par{Array} 各要素のの親
     * @param x{Number} 結合する要素1つ目
     * @param y{Number} 結合する要素2つ目
     * @return {Boolean} 同じ集合に属するTrue そうでない False
     */
    const  same = (par,x,y) =>{
        return find(par,x) == find(par,y);
    }

        //
    /**
     * POJ 1182 食物連鎖　蟻本p85
     * @param par{Array} 各要素のの親
     * @param rank {Array} 各要素の木の深さ
     * @param N{Number} 要素の総数
     * @param K{Number} 食物連鎖の数
     * @param T{Array} 食物連鎖の種類 １の時:X[i]とY[i]は同じ種類 ２の時:X[i]はY[i]を食べる
     * @param X{Array} 食物連鎖の要素1つ目 Y[i]と比較する
     * @param Y{Array} 食物連鎖の要素2つ目 X[i]と比較する
     * @param ans{Number} 矛盾する情報や、正しい番号ではない数
     * */
     const  cal = (par,rank,N,K,T,X,Y) =>{
        console.log(X)
        init(par,rank,N*3);
        let ans = 0;
        let loopCount = 0;

        console.log(`ループ数|上段_親 </br>下段_木の深さ|処理内容|`)
        console.log(`---|-----|----`)
        for(let i = 0; i < K; i++){
            let t = T[i];
            let x = X[i] - 1;
            let y = Y[i] - 1;
            if(x < 0 || N <= x || y < 0 || N <= y){
                ans++;
                console.log(`${i}|${par} </br> ${rank}|----`)
                console.log(`${i}::: ${x}::: 正しくない番号${ans}`)
                continue;
            }
            if(t == 1){
                if(same(par,x,y + N) || same(par,x,y + 2 * N)){
                    ans++;

                    console.log(`${i}::: ${x}::: 同じ種類${ans}`)

                }else{
                    unite(par,rank,x,y);
                    unite(par,rank,x + N, y + N)
                    unite(par,rank,x + N*2,y+N*2)
                }
            }
            else{
                if(same(par,x,y) || same(par,x,y + 2 * N)){
                    ans++;
                    console.log(`${i}::: ${x}::: 食べる${ans}`)
                }else{
                    unite(par,rank,x,y + N);
                    unite(par,rank,x + N, y+ 2*N)
                    unite(par,rank,x+2*N,y)
                }
            }
        }
        console.log(`ans::${ans}`)
        return ans;
    }
    defineExpose({
        init,
        find,
        unite,
        same,
        cal
    })
</script>
