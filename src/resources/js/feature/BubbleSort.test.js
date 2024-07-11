
import { mount, shallowMount } from '@vue/test-utils'
// import {render, screen} from '@testing-library/vue'
import { test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BubbleSort from './BubbleSort.vue'


// docker-compose exec -it app bash -c  "npm run test BubbleSort.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('displays message', () => {

  const wrapper = mount(BubbleSort,
    {
    global: {
      plugins: [vuetify],
    }
  })

// const wrapper = mount(BubbleSort);
  console.log(wrapper.html())
//   console.log(wrapper.findComponent(components.VBtn).html())
  // Assert the rendered text of the component
  //   expect(wrapper.text()).toContain('Components')
})
