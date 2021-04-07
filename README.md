# element-dialog-helper
Open/Close ElementUI dialogs in an imperative way
```html
<div id="app">
    <dialog-1 name="dialog-1-1"></dialog-1>
    <dialog-1 name="dialog-1-2"></dialog-1>
    <dialog-2></dialog-2>
    <el-button @click="$dialog.open('dialog-1-1')">Open dialog-1-1</el-button>
    <el-button @click="$dialog.open('dialog-1-2')">Open dialog-1-2</el-button>
    <el-button @click="$dialog.open('dialog2')">Open dialog2</el-button>
</div>
```

## Install
```
npm install element-dialog-helper
```

## Use in Vue projects
make sure you have ElementUI installed
```js
import Vue from "vue"
import ElementDialogHelper from "element-dialog-helper"

Vue.use(ElementDialogHelper);
```

## Usage
In file `Dialog1.vue`(this can be any of your custom dialog):
```html
<template>
    <el-dialog-helper name="dialog1" title="dialog1">
        <template #footer>
            <el-button @click="$dialog.close('dialog1')">Close</el-button>
        </template>

        Dialog1
    </el-dialog-helper>
</template>

<script>
export default {
    name: "Dialog1",
}
</script>
```

In file `Dialog2.vue`(this can be any of your custom dialog):
```html
<template>
    <el-dialog-helper name="dialog2" title="dialog2">
        <template #footer>
            <el-button @click="$dialog.close('dialog2')">Close</el-button>
        </template>

        Dialog2
    </el-dialog-helper>
</template>

<script>
export default {
    name: "Dialog2",
}
</script>
```

In file `MyComponent.vue`(the component where you have many dialogs):
```html
<template>
    <dialog1></dialog1>
    <dialog2></dialog2>
    
    <el-button @click="$dialog.open('dialog1')">Open Dialog1</el-button>
    <el-button @click="$dialog.open('dialog2')">Open Dialog2</el-button>
</template>

<script>
import Dialog1 from "./components/Dialog1"
import Dialog2 from "./components/Dialog2"

export default {
    name: "MyComponent",
    components: {
        Dialog1, Dialog2,
    },
}
</script>
```

***If you wish to use a dialog multiple times, remember to provide a unique name to each of them***  
For example:
```html
<template>
    <el-dialog-helper :name="name" title="dialog1">
        <template #footer>
            <el-button @click="$dialog.close('dialog1')">Close</el-button>
        </template>

        Dialog1
    </el-dialog-helper>
</template>

<script>
export default {
    name: "Dialog1",
    props: ["name"],
}
```

## API
```js
// in your Vue instance
// remember, name is unique through the whole app lifetime
this.$dialog.open("dialog-name");
this.$dialog.close("dialog-name");
```
the component `el-dialog-helper` is a wrap of `el-dialog`  
so you can use any props/events/slots of `el-dialog`  
for example, you can use this:
```html
<el-dialog-helper name="my-dialog" title="dialog" width="80%">
    content
</el-dialog-helper>
```
