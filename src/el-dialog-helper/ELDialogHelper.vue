<template>
    <el-dialog
        :visible.sync="visible"
        v-bind="$attrs"
        v-on="$listeners"
        :before-close="handleBeforeClose"
    >
        <template #footer>
            <slot name="footer"></slot>
        </template>
        <template #title>
            <slot name="title"></slot>
        </template>
        <slot></slot>
    </el-dialog>
</template>

<script>
let _cache = {};

export let cache = _cache;

export default {
    name: "ELDialogHelper",
    props: ["name"],
    data: function () {
        return {
            visible: false,
        }
    },
    created() {
        _cache[this.name] = this;
    },
    beforeDestroy() {
        delete _cache[this.name];
    },
    methods: {
        handleBeforeClose(done) {
            let myDone = () => {
                this.visible = false;
                done();
            };
            if (this.$attrs["before-close"]) {
                this.$attrs["before-close"](myDone);
            } else {
                myDone();
            }
        },

        show() {
            this.visible = true;
        },

        close() {
            this.visible = false;
        }
    }
    
}
</script>