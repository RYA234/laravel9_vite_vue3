import { mount } from "@vue/test-utils"
import UserInput from "./UserInput.vue"

describe("FormSubmitter", () => {
  it("reveals a notification when submitted", async () => {
    const wrapper = mount(UserInput)

    await wrapper.find("[data-username]").setValue("alice")
    await wrapper.find("form").trigger("submit.prevent")

    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.")
  })
})
