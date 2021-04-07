<template>
    <el-dialog-helper :name="name">
        {{ name }}
        
        <template #footer>
            <el-button @click="handleClick">confirm</el-button>
        </template>
    </el-dialog-helper>
</template>

<script>
export default {
    name: "Dialog1",
    props: ["name"],
    methods: {
        handleClick() {
            this.$dialog.close(this.name);
            this.$emit("confirm");
        }
    }
}
</script>