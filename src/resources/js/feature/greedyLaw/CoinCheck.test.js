
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

test('アルゴリズムの単体ddテスト', () => {

  const wrapper = mount(CoinCheck,
    {
    global: {
      plugins: [vuetify],
    }
  })
  //   console.log(wrapper.html())
  expect(wrapper.vm.check(620,[3,2,1,3,0,2])).toBe(6);
  
})
