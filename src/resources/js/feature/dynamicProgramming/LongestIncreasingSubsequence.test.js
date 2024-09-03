
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import LongestIncreasingSubsequence from './LongestIncreasingSubsequence.vue'

// docker-compose exec -it app bash -c  "npm run test LongestIncreasingSubsequence.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('最長増加部分列問題のテスト', () => {
    const wrapper = mount(LongestIncreasingSubsequence,
      {
      global: {
        plugins: [vuetify],
      }
    })
    //   console.log(wrapper.html())
    expect(wrapper.vm.calIncreasingNumber1(5,[4,2,3,1,5])).toBe(3);
  })
