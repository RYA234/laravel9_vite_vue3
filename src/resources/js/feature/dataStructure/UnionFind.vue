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
            // console.log(`${par}|　| 親par[${x}]（=${par[x]}）と要素x（=${x}）が一致する場合、xを返す`)
            return x;
        }
        // 親と要素が一致しない場合、親を再帰的に探す
        else{
            // console.log(`${par}|　| 親par[${x}]（=${par[x]}）と要素x（=${x}）が一致しない場合、親を再帰的に探す`)
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
        // console.log(`par|rank|行動`);
        // console.log(`--|---|---`)
        x = find(par,x);
        y = find(par,y);
        // 親が一致する場合、結合する必要がない
        if( x == y){
            // console.log(`${par}|${rank}|親が一致しているため結合しないで終了する。`)
            return};

        //木の深さが深い方に結合する
        if(rank[x] < rank[y]){
            par[x] = y;
            // console.log(`${par}|${rank}|1つ目の要素xより2つ目の要素yの木の深さが深いため、xの親をyに変更する。`);
        }else{
            par[y] = x;
            // console.log(`${par}|${rank}|2つ目の要素yより1つ目の要素xの木の深さが深いため、yの親をxに変更する。`);
            if(rank[x] == rank[y]){rank[x] =  rank[x] + 1;}
        }
        // console.log(`結合後の各要素の親:${par}`)
        // console.log(`結合後の各要素の木の深さ:${rank}`)
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
     * @param par{Array} 要素数は3N　0~N-1までの要素はAを指し、N~2N-1までの要素はB、2N~3N--1までの要素はCを指す
     * @param rank {Array} 各要素の木の深さ 全部0にする。
     * @param N{Number} 要素の総数　動物の匹数
     * @param K{Number} 食物連鎖の数　情報の数
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

        // console.log(`ループ数|p|処理内容|`)
        // console.log(`---|-----|----`)
        console.log(`i|x|y|par|rank|ans|条件|行動`);
        console.log(`-|-|-|---|----|---|----|---`)

        // 情報の数だけループ
        for(let i = 0; i < K; i++){

            let t = T[i];
            let x = X[i] - 1;
            let y = Y[i] - 1;

            //正しくない情報
            // x,yが0~N-1の範囲にない場合
            if(x < 0 || N <= x || y < 0 || N <= y){
                ans++;
                console.log(`${i}|${x}|${y}|${par}|${rank}|${ans}|正しくない情報</br>x,yが0~N-1の範囲にない場合</br>${x} < 0 かつ ${N} <= ${x} かつ ${y} < 0 かつ ${N} <= ${y}|情報${i+1}は矛盾した情報`);
                continue;
            }
            // タイプ1の場合
            if(t == 1){
                // 正しくない情報
                // x-Aとy-Bが同じ種類、x-Aとy-Cが同じ種類の場合、矛盾する
                if(same(par,x,y + N) || same(par,x,y + 2 * N)){
                    ans++;
                    console.log(`${i}|${x}|${y}|${par}|${rank}|${ans}|タイプ１正しくない情報</br>x-Aとy-Bが同じ種類、x-Aとy-Cが同じ種類の場合、矛盾する|タイプ１情報${i+1}は矛盾した情報`);
                }
                // 正しい情報の場合は結合する
                else{
                    unite(par,rank,x,y);            // 同じ種類なので、x-Aとy-Aを結合
                    unite(par,rank,x + N, y + N)    // 同じ種類なので、x-Bとy-Bを結合
                    unite(par,rank,x + N*2,y+N*2)   // 同じ種類なので、x-Cとy-Cを結合
                    console.log(`${i}|${x}|${y}|${par}|${rank}|${ans}|正しい情報|${x}が${y}は同じ種類`);
                }
            }
            // タイプ２の場合
            else{
                // 正しくない情報
                // x-Aとy-Bが同じ種類、AがCを食べるので矛盾する
                if(same(par,x,y) || same(par,x,y + 2 * N)){
                    ans++;
                    console.log(`${i}|${x}|${y}|${par}|${rank}|${ans}|タイプ2正しくない情報</br>x-Aとy-Aが同じ種類、x-Aとy-Cが同じ種類の場合、矛盾する|タイプ２情報${i+1}は矛盾した情報`);
                }
                // 正しい情報の場合は結合する
                else{
                    unite(par,rank,x,y + N);        // AはBを食べるので、x-Aとy-Bを結合
                    unite(par,rank,x + N, y+ 2*N)   // BはCを食べるので、x-Bとy-Cを結合
                    unite(par,rank,x+2*N,y)         // CはAを食べるのでx-Cとy-Aを結合
                    console.log(`${i}|${x}|${y}|${par}|${rank}|${ans}|正しい情報|${x}が${y}を食べる`);

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
