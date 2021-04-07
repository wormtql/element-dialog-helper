<template>
    <div id="app">
        <dialog-1 name="dialog-1-1"></dialog-1>
        <dialog-1 name="dialog-1-2"></dialog-1>
        <dialog-2></dialog-2>
        <el-button @click="$dialog.open('dialog-1-1')">Open dialog-1-1</el-button>
        <el-button @click="$dialog.open('dialog-1-2')">Open dialog-1-2</el-button>
        <el-button @click="$dialog.open('dialog2')">Open dialog2</el-button>
    </div>
</template>

<script>
import Dialog1 from "./components/Dialog1";
import Dialog2 from "./components/Dialog2";

export default {
    name: 'App',
    components: {
        Dialog1,
        Dialog2,
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
