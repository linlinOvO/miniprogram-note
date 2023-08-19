import { observable, action } from "mobx-miniprogram"

export const store = observable ({
    numA: 1,
    numB: 2,
    // get 方法
    get sum(){
        return this.numA + this.numB
    },
    // action 方法
    updateNumA: action(function (step){
        this.numA += step
    }),
    updateNumB: action(function (step){
        this.numB += step
    }),

})