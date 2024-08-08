
import { mount } from '@vue/test-utils'

import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import SectionSchedule from './SectionSchedule.vue'

// docker-compose exec -it app bash -c  "npm run test SectionSchedule.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('区間スケジューリングの単体テスト', () => {

  const wrapper = mount(SectionSchedule,
    {
    global: {
      plugins: [vuetify],
    }
  })
  //   console.log(wrapper.html())
  expect(wrapper.vm.scheduling(5,[1,2,4,6,8],[3,5,7,9,10])).toBe(3);
  expect(wrapper.vm.scheduling(3,[1,2,4],[8,3,6])).toBe(2);
  expect(wrapper.vm.scheduling(3,[1,2,4],[3,5,8])).toBe(2);
})
