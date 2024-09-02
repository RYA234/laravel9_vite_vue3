
import { mount, shallowMount,findComponents } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import DuplicateCombination from './DuplicateCombination.vue'

// docker-compose exec -it app bash -c  "npm run test DuplicateCombination.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('テストA', () => {

  const wrapper = mount(DuplicateCombination,
    {
    global: {
      plugins: [vuetify],
    }
  })
  //   console.log(wrapper.html())
  expect(wrapper.vm.cal(3,3,[1,2,3])).toBe(6);

})

test('テストB', () => {

    const wrapper = mount(DuplicateCombination,
      {
      global: {
        plugins: [vuetify],
      }
    })

    //   console.log(wrapper.html())
    expect(wrapper.vm.cal(2,2,[1,2])).toBe(6);

  })
