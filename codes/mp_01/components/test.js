// components/test.js
const myBehavior = require('../behaviors/my-behavior')

import {storeBindingsBehavior} from "mobx-miniprogram-bindings"
import {store} from "../store/store"

Component({
    behaviors: [myBehavior, storeBindingsBehavior],
    storeBindings: {
        store,
        fields: {
            // 这是三种绑定字段的方法
            numA: () => store.numA,
            numB: (store) => store.numB,
            sum: 'sum'
        },
        actions: {
            updateNumA: 'updateNumA'
        }
    },

    options: {
        pureDataPattern: /^_/,
        multipleSlots: true
    },
  /**
   * 组件的属性列表
   */
  properties: {
      max: {
          type: Number,
          value: 10
      },
      _min: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
      n1: 0,
      n2: 0,
      sum: 0
  },
  observers: {
      "n1, n2": function(n1, n2){
          this.setData({sum: n1 + n2})
      }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  options: {
      styleIsolation: "isolated"
  }
})
