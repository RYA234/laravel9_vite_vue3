
/
<script setup>
import { ref } from 'vue';
const input = ref(["","","",""]);
const output = ref([,,,]);
const isOutputDisplayed = ref(false)
const inputValidError = ref(true);

/**
 * リセットボタンクリックイベント
 * 入力、結果の初期化と結果の非表示を行う。
 */
const resetButtonClick = () => {
    console.log('reset');
     isOutputDisplayed.value = false;
    input.value = ["","","",""];
}
/**
 * 計算ボタンクリックイベント
 * バブルソートの実行と結果の表示を行う。
 */
const calculateButtonClick = () =>{
    output.value = bubbleSort(input.value);
    console.log(output.value);
    isOutputDisplayed.value = true;
}


/**
 * バブルソート
 * @param {Array} array - ソート対象の配列
 * @return {Array} - ソート後の配列
 */
function bubbleSort(array){
    console.debug(array.length);
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }
    return array;
}

const validateInput = (array) => {

}

</script>

<template>
<h1  class="d-flex justify-center mb-6  flex-row ">バブルソート</h1>


        <v-sheet class="d-flex justify-center mb-6 ">
            <!-- <label for="elementNumber">配列sの数</label>
            <div width="50px" height="60px">
                <v-select name="elementNumber" :items="['4','5','6','7','8']"></v-select>
            </div> -->
        </v-sheet>
        <div>
            <div v-if="inputValidError" class="justify-center py-3 d-flex">エラーです</div>
                <v-row class="d-flex justify-center mb-6  flex-row " >
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[0]"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[1]"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[2]"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[3]"></v-text-field>
                </v-row>
        </div>
        <div class="d-flex justify-center mb-6  flex-row ">
            <v-btn  class="mx-4" @click = "calculateButtonClick" >計算</v-btn>
            <v-btn  @click = "resetButtonClick" class="mx-4" >リセット</v-btn>
        </div>
        <h1  class="d-flex justify-center mb-6  flex-row ">結果</h1>
        <div v-if="isOutputDisplayed">
                <v-row class="d-flex justify-center mb-6  flex-row " >
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[0]" :Disabled="true"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[1]" :Disabled="true"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[2]" Disabled="true"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[3]" Disabled="true"></v-text-field>
                </v-row>
                <h1 class="d-flex justify-center mb-6  flex-row ">途中結果 commingsoon</h1>
            </div>
</template>


<style>

</style>
