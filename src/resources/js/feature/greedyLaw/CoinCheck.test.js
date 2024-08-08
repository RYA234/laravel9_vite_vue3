
import { mount, shallowMount,findComponents } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import CoinCheck from './CoinCheck.vue'

// docker-compose exec -it app bash -c  "npm run test CoinCheck.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('硬貨の問題単体テスト 620円を満たす少ない硬貨の枚数。[1,5,10,50,100,500]円= [3,2,1,3,0,2]', () => {
  const wrapper = mount(CoinCheck,
    {
    global: {
      plugins: [vuetify],
    }
  })
  //   console.log(wrapper.html())
  expect(wrapper.vm.check(620,[3,2,1,3,0,2])).toBe(6);
})
