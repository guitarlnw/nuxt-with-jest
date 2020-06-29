import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import Select from '@/components/Select.vue'

// const emitMock = jest.fn()

describe('Testing Select component', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    // emitMock.mockRestore()
  })

  test('เมื่อไม่ส่ง props ใดๆ ค่า props จะต้องมีเป็น default', () => {
    const wrapper = mount(Select, {
      vuetify
    })
    expect(wrapper.props().items).toEqual([])
    expect(wrapper.props().value).toBe('')
  })

  // test('เมื่อส่ง props ชื่อ items ค่า props จะต้องมีค่าตามที่ Mockup', () => {
  //   const items = [
  //     { text: 'Jack', value: '001' },
  //     { text: 'John', value: '002' }
  //   ]
  //   const wrapper = mount(Select, {
  //     propsData: {
  //       items
  //     },
  //     vuetify
  //   })
  //   expect(wrapper.props().items).toBe(items)
  // })

  // test('เมื่อส่ง props value = 002 ค่าใน $emit input จะถูก called 1 ครั้ง และค่าที่ถูกส่งกลับมาจะเป็น 002', async () => {
  //   const items = [
  //     { text: 'Jack', value: '001' },
  //     { text: 'John', value: '002' }
  //   ]
  //   const wrapper = mount(Select, {
  //     propsData: {
  //       items
  //     },
  //     vuetify,
  //     mocks: {
  //       $emit: (name, value) => {
  //         emitMock(name, value)
  //       }
  //     }
  //   })
  //   await wrapper.setProps({ value: '002' })
  //   expect(wrapper.vm.innerValue).toBe('002')
  //   expect(emitMock.mock.calls.length).toBe(1)
  //   expect(emitMock).toHaveBeenCalledWith('input', '002')
  // })

  // test('เมื่อเปลี่ยน innerValue เป็น 001 ตัวหนังสือใน <p/> จะต้องแสดงเป็น Selected is : Jack', async () => {
  //   const items = [
  //     { text: 'Jack', value: '001' },
  //     { text: 'John', value: '002' }
  //   ]
  //   const wrapper = mount(Select, {
  //     propsData: {
  //       items
  //     },
  //     vuetify,
  //     mocks: {
  //       $emit: (name, value) => {
  //         emitMock(name, value)
  //       }
  //     }
  //   })
  //   await wrapper.setData({ innerValue: '001' })
  //   expect(wrapper.find('.text-selected').text()).toBe('Selected is : Jack')
  // })
})
