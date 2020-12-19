
import type { App } from 'vue';


import 
    {Button,Input}
 from 'ant-design-vue'




export function setAntd(app: App<Element>) {
    app.use(Button)
    
}