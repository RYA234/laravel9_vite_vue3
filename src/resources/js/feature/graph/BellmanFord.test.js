
import { mount, shallowMount,findComponents } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BellmanFord from './BellmanFord.vue'

// docker-compose exec -it app bash -c  "npm run test BellmanFord.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('アルゴリズムの単体ddテスト', () => {

  const wrapper = mount(BellmanFord ,
    {
    global: {
      plugins: [vuetify],
    }
  })
    const INF = 1000000;

    let edge12 = [
        [0,1,2],[0,2,5],
        [1,2,4],[1,3,6],[1,4,10],[1,0,2],
        [2,0,5],[2,1,4],[2,3,2],
        [3,2,2],[3,1,6],[3,5,1],
        [4,1,10],[4,5,3],[4,6,5],
        [5,3,1],[5,4,3],[5,6,9],
        [6,4,5],[6,5,9]
    ];

    // これでエラーになる
    expect(wrapper.vm.bellmanford(0,7,20,edge12,6)).toBe(16);

    // ABC の３点が存在
    let edge2 = [[0,1,2],[0,2,5]];
    expect(wrapper.vm.bellmanford(0,3,2,edge2,1)).toBe(2);

    // ABCD の4点が存在
    let edge3 = [[0,1,2],[0,2,5],[1,3,6],[2,3,2]];
    expect(wrapper.vm.bellmanford(0,4,4,edge3,3)).toBe(7);

})
