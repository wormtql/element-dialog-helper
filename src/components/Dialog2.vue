<template>
    <el-dialog-helper name="dialog2">
        dialog2
        
        <template #footer>
            <el-button @click="handleClick">confirm</el-button>
        </template>
    </el-dialog-helper>
</template>

<script>
export default {
    name: "Dialog2",
    methods: {
        handleClick() {
            this.$dialog.close("dialog2");
            this.$emit("confirm");
        }
    }
}
</script>