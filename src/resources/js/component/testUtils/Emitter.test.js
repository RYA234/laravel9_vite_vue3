import Emitter from "./Emitter.vue"
import { shallowMount } from "@vue/test-utils"

describe("Emitter", () => {
  it("２つの引数があるイベントを発火する", () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()

    console.log(wrapper.emitted())
  })
})
