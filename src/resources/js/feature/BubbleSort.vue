
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
     isOutputDisplayed.value = false;
    input.value = ["","","",""];
}
/**
 * 計算ボタンクリックイベント
 * バブルソートの実行と結果の表示を行う。
 */
const calculateButtonClick = () =>{
    output.value = bubbleSort(input.value.map(Number));
    console.log(output.value);
    isOutputDisplayed.value = true;
}


/**
 * バブルソート
 * @param {Array} array - ソート対象の配列
 * @return {Array} - ソート後の配列
 */
function bubbleSort(array){
    let tempArray = array.map(Number)
    for(let i = 0; i < tempArray.length; i++){
        for(let j = 0; j < tempArray.length - 1; j++){
            if(tempArray[j] > tempArray[j+1]){
                let tmp = tempArray[j];
                tempArray[j] = tempArray[j+1];
                tempArray[j+1] = tmp;
            }
        }
    }
    return tempArray;
}

const validateInput = (array) => {

}


 const sum = (i) =>{

    return i*i;
}

defineExpose({
    isOutputDisplayed,
    sum,
    bubbleSort,
    calculateButtonClick
})

</script>
<script>

</script>

<template>
<h1  class="d-flex justify-center mb-6  flex-row ">バブルソート</h1>


        <v-sheet class="d-flex justify-center mb-6 ">
            <label for="elementNumber">配列sの数</label>
            <div width="50px" height="60px">
                <v-select name="elementNumber" :items="['4','5','6','7','8']"></v-select>
            </div>
        </v-sheet>
        <div>
            <div v-if="inputValidError" class="justify-center py-3 d-flex">エラーです</div>
                <v-row class="d-flex justify-center mb-6  flex-row " >
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[0]" id="input_1"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[1]" id="input_2"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[2]" id="input_3"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" v-model="input[3]" id="input_4"></v-text-field>
                </v-row>
        </div>
        <div class="d-flex justify-center mb-6  flex-row ">
            <v-btn  class="mx-4" @click = "calculateButtonClick" id="submit" >計算</v-btn>
            <v-btn  @click = "resetButtonClick" class="mx-4" id="reset" >リセット</v-btn>
        </div>
        <h1  class="d-flex justify-center mb-6  flex-row ">結果</h1>
        <div v-if="isOutputDisplayed">
                <v-row class="d-flex justify-center mb-6  flex-row " >
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[0]" :Disabled="true" id="output_1"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[1]" :Disabled="true" id="output_2"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[2]" Disabled="true" id="output_3"></v-text-field>
                        <v-text-field  maxlength=3  max-width="100px" class="px-3" :value="output[3]" Disabled="true" id="output_4"></v-text-field>
                </v-row>
                <h1 class="d-flex justify-center mb-6  flex-row ">途中結果 commingsoon</h1>
        </div>
</template>


<style>

</style>
