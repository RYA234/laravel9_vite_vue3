
import { mount } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BipartiteGraph from './BipartiteGraph.vue'

// docker-compose exec -it app bash -c  "npm run test BipartiteGraph.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('p93 例1テスト', () => {

  const wrapper = mount(BipartiteGraph,
    {
    global: {
      plugins: [vuetify],
    }
  })
    console.log(wrapper.html())
  const testCase1Number = 3;
const testCase1Array = [[1,2],[0,2],[0,1]];
  expect(wrapper.vm.checkBipartite(testCase1Number,testCase1Array)).toBe("No");

})


test('p93 例2テスト', () => {

    const wrapper = mount(BipartiteGraph,
      {
      global: {
        plugins: [vuetify],
      }
    })
    const testCase2Number = 4;
    const testCase2Array = [[1,3],[0,2],[1,3],[0,2]];
    expect(wrapper.vm.checkBipartite(testCase2Number,testCase2Array)).toBe("Yes");
  })


  test('自作 頂点２つの場合はYesになる', () => {

    const wrapper = mount(BipartiteGraph,
      {
      global: {
        plugins: [vuetify],
      }
    })
      console.log(wrapper.html())
    const testCase1Number = 2;
  const testCase1Array = [[1],[0]];
    expect(wrapper.vm.checkBipartite(testCase1Number,testCase1Array)).toBe("Yes");
  })


  test('自作 頂点4つですべての頂点は隣接してる場合NGになる', () => {

    const wrapper = mount(BipartiteGraph,
      {
      global: {
        plugins: [vuetify],
      }
    })
    const testCase2Number = 4;
    const testCase2Array = [[1,2,3],[0,2,3],[0,1,3],[0,1,2]];
    expect(wrapper.vm.checkBipartite(testCase2Number,testCase2Array)).toBe("No");
  })
