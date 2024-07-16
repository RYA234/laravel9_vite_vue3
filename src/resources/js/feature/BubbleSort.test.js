
import { mount, shallowMount,findComponents } from '@vue/test-utils'
// import {render, screen} from '@testing-library/vue'
import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BubbleSort from './BubbleSort.vue'
import flushPromises from "flush-promises"
import { defineComponent } from 'vue'

// docker-compose exec -it app bash -c  "npm run test BubbleSort.test.js "

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('アルゴリズムの単体テスト', () => {

  const wrapper = mount(BubbleSort,
    {
    global: {
      plugins: [vuetify],
    }
  })
  //   console.log(wrapper.html())
  expect(wrapper.vm.bubbleSort([81,100,4,5])).toMatchObject([4,5,81,100])
  // 文字列が入力された場合でも数値に変換してソートすることを確認する
  expect(wrapper.vm.bubbleSort(['1','16','8','2'])).toMatchObject([1,2,8,16])
})


  test('初期表示', () => {

    const wrapper = mount(BubbleSort,
      {
      global: {
        plugins: [vuetify],
      }
    })
    // テキストボックスを表示
    expect(wrapper.findAllComponents(components.VTextField).at(0).text()).toBe("")
    expect(wrapper.findAllComponents(components.VTextField).at(1).text()).toBe("")
    expect(wrapper.findAllComponents(components.VTextField).at(2).text()).toBe("")
    expect(wrapper.findAllComponents(components.VTextField).at(3).text()).toBe("")

    // 結果欄は表示されない
    expect(wrapper).not.toContain('output_1')
    expect(wrapper).not.toContain('output_2')
    expect(wrapper).not.toContain('output_3')
    expect(wrapper).not.toContain('output_4')

  })

  test('計算ボタンを押して、結果が表示される', async() => {
    const wrapper = mount(BubbleSort,
      {
      global: {
        plugins: [vuetify],
      }
    })

    // console.log(wrapper.find('#input_1').html())
    // 入力
    await wrapper.find('#input_1').setValue('16')
    await wrapper.find('#input_2').setValue('2')
    await wrapper.find('#input_3').setValue('1')
    await wrapper.find('#input_4').setValue('8')
    // 計算実行
    await wrapper.find('#submit').trigger('click');

    // 結果確認
    expect(wrapper.find('#output_1').html()).toContain('value="1"')
    expect(wrapper.find('#output_2').html()).toContain('value="2"')
    expect(wrapper.find('#output_3').html()).toContain('value="8"')
    expect(wrapper.find('#output_4').html()).toContain('value="16"')
  })

test('リセットボタンを押して初期化する',async() =>{
    const wrapper = mount(BubbleSort,
        {
        global: {
          plugins: [vuetify],
        }
      })

    // 初期状態　入力して
    await wrapper.find('#input_1').setValue('8')
    await wrapper.find('#input_2').setValue('5')
    await wrapper.find('#input_3').setValue('88')
    await wrapper.find('#input_4').setValue('77')
    await wrapper.find('#submit').trigger('click');

    await wrapper.find('#reset').trigger('click');

    //入力値の確認
    expect(wrapper.findAllComponents(components.VTextField).at(0).text()).toBe("")
    expect(wrapper.findAllComponents(components.VTextField).at(1).text()).toBe("")
    expect(wrapper.findAllComponents(components.VTextField).at(2).text()).toBe("")
    expect(wrapper.findAllComponents(components.VTextField).at(3).text()).toBe("")
    // 結果欄は表示されない
    expect(wrapper).not.toContain('output_1')
    expect(wrapper).not.toContain('output_2')
    expect(wrapper).not.toContain('output_3')
    expect(wrapper).not.toContain('output_4')
})

