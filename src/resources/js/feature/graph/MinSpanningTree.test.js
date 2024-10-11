
import { mount, shallowMount,findComponents } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import MinSpanningTree from './MinSpanningTree.vue'

// docker-compose exec -it app bash -c  "npm run test MinSpanningTree.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('プリム法テスト', () => {

  const wrapper = mount(MinSpanningTree,
    {
    global: {
      plugins: [vuetify],
    }
  })
  let INF = 1000;
  let graph1 = [[INF,1,INF,INF,INF,INF,INF],
                [1,INF,3,INF,7,INF,2],
                [INF,3,INF,5,1,INF,INF],
                [INF,INF,5,INF,8,INF,INF],
                [INF,7,1,8,INF,5,INF],
                [INF,INF,INF,INF,5,INF,10],
                [INF,2,INF,INF,INF,10,INF]
            ]
  expect(wrapper.vm.prim(graph1,7)).toBe(17);
})


test('プリム法テスト_例1', () => {

    const wrapper = mount(MinSpanningTree,
      {
      global: {
        plugins: [vuetify],
      }
    })
    let INF = 1000;
    let graph1 = [[INF,2,8,20],
                 [2,INF,1,4],
                 [8,1,INF,10],
                 [20,4,10,INF]
              ]
    expect(wrapper.vm.prim(graph1,4)).toBe(7);
  })

  test('プリム法テスト_例2', () => {

    const wrapper = mount(MinSpanningTree,
      {
      global: {
        plugins: [vuetify],
      }
    })
    let INF = 1000;
    let graph1 = [[INF,2,8,20,INF],
                 [2,INF,1,4,INF],
                 [8,1,INF,10,30],
                 [20,4,10,INF,5],
                 [INF,INF,30,5,INF]
              ]
    expect(wrapper.vm.prim(graph1,5)).toBe(12);
  })


test('クラスカル法テスト', () => {

    const wrapper = mount(MinSpanningTree,
      {
      global: {
        plugins: [vuetify],
      }
    })

    let graph=[[0,1,1],[1,2,3],[1,4,7],
               [1,6,2],[2,4,1],[2,3,5],
               [3,4,8],[4,5,5],[5,6,10]]
  //   console.log(wrapper.html())
    // expect(wrapper.vm.kruskal(graph,7,9)).toBe(17);
  })

  test('Consriptionテスト', () => {

    const wrapper = mount(MinSpanningTree,
      {
      global: {
        plugins: [vuetify],
      }
    })

    let graph1=[[4,3,-6831],[1,3,-4583],[0,0,-6592],
               [0,1,-3063],[3,3,-4975],
               [1,3,-2049],[4,2,-2104],[2,2,-781]]

    let graph=[[0,1,1],[1,2,3],[1,4,7],
    [1,6,2],[2,4,1],[2,3,5],
    [3,4,8],[4,5,5],[5,6,10]]
  //   console.log(wrapper.html())
    // expect(wrapper.vm.conscription(graph1,5,5,8)).toBe(71071);
  })
