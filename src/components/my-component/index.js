
import toast from './toast.vue'

const myComponents = {
  install (Vue) {
    const ToastObj = Vue.extend(toast)

    Vue.prototype.$Toast = (options) => {
      const {
         content, know,
      } = options
      const Toast = new ToastObj({
        propsData: {
          content,
          know: Object.prototype.toString.call(know) === '[object Function]' ? know : () => {},
        }
      }).$mount()
      document.body.appendChild(Toast.$el)
    }
  }
}

export default myComponents
