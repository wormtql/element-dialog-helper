import helper from "./ELDialogHelper";
import { cache } from "./ELDialogHelper";

export default {
    install(vue) {
        vue.component("el-dialog-helper", helper);

        vue.prototype.$dialog = {
            open(name) {
                // console.log(cache[name]);
                cache[name].show();
            },

            close(name) {
                cache[name].close();
            }
        }
    }
}