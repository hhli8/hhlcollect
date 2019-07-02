/**
 * 引入组件
 */
import Loading from './Loading'

const hview = {
  Loading: Loading
}

const install = Vue => {
  Object.keys(hview).forEach(key => Vue.component(key, hview[key]))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default Object.assign(hview, {
  install
})
