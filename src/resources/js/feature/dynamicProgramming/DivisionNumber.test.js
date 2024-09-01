
import { mount } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import DivisionNumber from './DivisionNumber.vue'

// docker-compose exec -it app bash -c  "npm run test DivisionNumber.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('動的計画法有のメソッドのテスト', () => {

    const wrapper = mount(DivisionNumber,
      {
      global: {
        plugins: [vuetify],
      }
    })
    //   console.log(wrapper.html())
    expect(wrapper.vm.calDivisionNumber(4,3,10000)).toBe(4);
    // expect(wrapper.vm.calDivisionNumber(4,4,10000)).toBe(5);
    // expect(wrapper.vm.calDivisionNumber(2,2,10000)).toBe(2);
    // expect(wrapper.vm.calDivisionNumber(3,3,10000)).toBe(3);
  })

