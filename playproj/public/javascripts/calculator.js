var indexVue = new Vue({
    el: '#calculator-vue',
    template: "" +
    "<div> " +
        "<div id='formula'>{{ formulaText }}</div> " +
        "<div id='calcResult'>{{ calcResultText }}</div> " +
        "<div id='keys'> " +
            "<div id='func'> " +
                "<input type='button' id='func-ac' value='AC' @click='displayCalcResultZero()'></input> " +
                "<input type='button' id='func-plusMinus' value='+/-'></input> " +
                "<input type='button' id='func-perc' value='%'></input> " +
            "</div> " +
            "<div id='num'> " +
                "<input type='button' id='num-7' value='7' v-on:click='displayCalcResult(\"7\")'></input> " + 
                "<input type='button' id='num-8' value='8' v-on:click='displayCalcResult(\"8\")'></input> " +
                "<input type='button' id='num-9' value='9' v-on:click='displayCalcResult(\"9\")'></input> " +
                "<input type='button' id='num-4' value='4' v-on:click='displayCalcResult(\"4\")'></input> " +
                "<input type='button' id='num-5' value='5' v-on:click='displayCalcResult(\"5\")'></input> " +
                "<input type='button' id='num-6' value='6' v-on:click='displayCalcResult(\"6\")'></input> " +
                "<input type='button' id='num-1' value='1' v-on:click='displayCalcResult(\"1\")'></input> " +
                "<input type='button' id='num-2' value='2' v-on:click='displayCalcResult(\"2\")'></input> " +
                "<input type='button' id='num-3' value='3' v-on:click='displayCalcResult(\"3\")'></input> " +
                "<input type='button' id='num-0' value='0' v-on:click='displayCalcResult(\"0\")'></input> " +
                "<input type='button' id='num-point' value='.' v-on:click='displayCalcResult(\".\")'></input> " +
                "<input type='button' id='test' value='test' v-on:click='test()'></input> " +
            "</div> " +
            "<div id='operator'> " +
                "<input type='button' id='ope-divide' value='÷' @click='clickOperator(\"÷\")'></input> " +
                "<input type='button' id='ope-times' value='×' @click='clickOperator(\"×\")'></input> " +
                "<input type='button' id='ope-subtract' value='-' @click='clickOperator(\"-\")'></input> " +
                "<input type='button' id='ope-add' value='+' @click='clickOperator(\"+\")'></input> " +
                "<input type='button' id='ope-equal' value='=' @click='clickEqual()'></input> " +
            "</div> " +
        "</div> " +
            "<div>{{message}}</div>" +
        "</div> " ,
    data: {
        formulaText: '　',
        calcResultText: 0,
        message: '電卓移行先',
        globCalcResult: '',          //メイン表示
        globPreCalcResult: '',       //前の計算結果
        numInputMode: true,          //true: 数字入力モード, false: 演算子入力モード
    },
    methods: {
        test : function () {
            console.log('Test');
        },

        displayCalcResult: function(inputNumber) {
            console.log(inputNumber);
            // var calcResultElement = document.getElementById("calcResult");
            // // inputNumberが.かつすでに.がcalcResultElementに含まれていた場合、終了
            // if (inputNumber == "." && calcResultElement.textContent.indexOf('.') !== -1) return;

            
            if (inputNumber == "." && this.calcResultText.indexOf('.') !== -1) return;

            // if (calcResultElement.textContent == "0" && inputNumber !== ".") {
            //     globCalcResult = inputNumber;
            // } else if(numInputMode == false){        
            //     globCalcResult = inputNumber;
            //     numInputMode = true;
            // } else {
            //     globCalcResult = calcResultElement.textContent + inputNumber;
            // }
    
            //globCalcResultに表示する数値を入れる
            //演算子入力モードまたは、ゼロかつ、ドット以外の数字を押された
            // if (this.numInputMode == false || (calcResultElement.textContent == "0" && inputNumber !== ".")) {
            //     this.globCalcResult = inputNumber;
            if (this.numInputMode == false || (this.calcResultText == "0" && inputNumber !== ".")) {
                this.globCalcResult = inputNumber;
            //ゼロじゃない、または「.」を入力した場合
            } else {
                // this.globCalcResult = calcResultElement.textContent + inputNumber;
                this.globCalcResult = this.calcResultText + inputNumber;
            }
            
            //演算子入力モードの場合、数字入力モードに変える
            if (this.numInputMode == false) {
                this.numInputMode = true;
            }
    
            //globCalcResultを画面に表示する
            // calcResultElement.textContent = this.globCalcResult;
            this.calcResultText = this.globCalcResult;
        },

        // calcResultをゼロにする関数
        displayCalcResultZero: function(){
            document.getElementById("calcResult").textContent = "0";
            document.getElementById("formula").textContent = "0";
            // this.calcResultText = '0';
            // this.formulaText = '0';
            this.globCalcResult = 0;
            this.globPreCalcResult = 0;
        },
    
        clickOperator: function(inputOperator){
            if(this.globPreCalcResult == ''){
                this.globPreCalcResult = this.globCalcResult;
            }else{
                switch(inputOperator){
                    case '+':
                        this.globPreCalcResult = Number(this.globPreCalcResult) + Number(this.globCalcResult);
                        break;
                    case '-':
                        this.globPreCalcResult = Number(this.globPreCalcResult) - Number(this.globCalcResult);
                        break;
                    case '×':
                        this.globPreCalcResult = Number(this.globPreCalcResult) * Number(this.globCalcResult);
                        break;
                    case '÷':
                        this.globPreCalcResult = Number(this.globPreCalcResult) / Number(this.globCalcResult);
                        break;
                    default:
                        break;
                }
                // document.getElementById("calcResult").textContent = this.globPreCalcResult;
                this.calcResultText = this.globPreCalcResult;
            }
            // document.getElementById("formula").textContent = this.globPreCalcResult + inputOperator;
            this.formulaText = this.globPreCalcResult + inputOperator;
            this.numInputMode = false;
        }
    
    },
    components: {
    },
});
