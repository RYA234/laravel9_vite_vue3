
import { mount, shallowMount,findComponents } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import UnionFind from './UnionFind.vue'

// docker-compose exec -it app bash -c  "npm run test UnionFind.test.js "

const vuetify = createVuetify({
components,
directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('Union-Find木の結合テスト', () => {

  const wrapper = mount(UnionFind,
    {
    global: {
      plugins: [vuetify],
    }
  })
    var par,rank;
    par = [0,1,1,0,6,1,6,4]
    rank = [0,1,1,0,2,1,2,2]
    let afterPar = [0,6,1,0,6,1,6,4]
    let afterRank = [0,1,1,0,2,1,2,2]

    // wrapper.vm.unite(par,rank,6,1);

    // expect(par).toStrictEqual(afterPar);
    // expect(rank).toStrictEqual(afterRank);
})



test('食物連鎖テスト', () => {

    const wrapper = mount(UnionFind,
      {
      global: {
        plugins: [vuetify],
      }
    })
    //   console.log(wrapper.html())

    var par,rank;
    // par = [1,2,2,2,1,2,1,101,1,2,3,1,3,5,1,2,3,3,3,1,5]
    par = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    rank= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const T = [1,2,2,2,1,2,1]
    const X =[101,1,2,3,1,3,5];
    const Y =[1,2,3,3,3,1,5];
    // let afterPar = [0,6,6,0,6,0,6,6]
    // let afterRank = [0,2,2,0,2,0,2,2]
    wrapper.vm.init(par,rank,7);
    let result = wrapper.vm.cal(par,rank,100,7,T,X,Y);
    expect(result).toBe(3);
  })


  test('食物連鎖テスト_例', () => {

    const wrapper = mount(UnionFind,
      {
      global: {
        plugins: [vuetify],
      }
    })
    //   console.log(wrapper.html())

    var par,rank;
    par = [0,0,0,0,0,0,0,0,0,0,0,0];
    rank= [0,0,0,0,0,0,0,0,0,0,0,0]
    const T = [1,2,1,2]
    const X =[1,3,5,1];
    const Y =[2,4,4,2];
    let afterPar = [0,6,6,0,6,0,6,6]
    let afterRank = [0,2,2,0,2,0,2,2]
    wrapper.vm.init(par,rank,4);
    let result = wrapper.vm.cal(par,rank,4,4,T,X,Y);
    expect(result).toBe(2);
  })
