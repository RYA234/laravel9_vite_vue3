
import { mount, shallowMount,findComponents } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Dijkstra from './Dijkstra.vue'

// docker-compose exec -it app bash -c  "npm run test Dijkstra.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('ダイクストラ法テスト', () => {

  const wrapper = mount(Dijkstra,
    {
    global: {
      plugins: [vuetify],
    }
  })
  let INF = 1000;
  let edge1 = [[INF,2,5,INF,INF,INF,INF],
              [2,INF,4,6,10,INF,INF],
              [5,4,INF,INF,INF,INF,INF],
              [INF,6,2,INF,INF,1,INF],
              [INF,10,INF,INF,INF,3,5],
              [INF,INF,INF,1,3,INF,9],
              [INF,INF,INF,INF,5,9,INF]
            ]
    console.log(edge1[0][1])
    expect(wrapper.vm.cal(0,7,edge1,6)).toBe(17);

})
