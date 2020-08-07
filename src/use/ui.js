import Vue from "vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

//如果使用字典需要赋值axios为全局
import axios from 'axios';
window.axios=axios

Vue.use(ElementUI)
Vue.use(Avue);
