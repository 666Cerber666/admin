<template>
    <transition-group name="fade">
        <div class='dialog' v-if="IsVisibleDialogExit" @click="HideDialog"> 
            <div class="dialog-exit-content" @click.stop>
                <div class="dialog-head" style="color:red">Вы точно желаете выйти?</div>
                <br>
                <div class="exit-button-exit">
                    <button class="btn btn-success" @click="AcceptExit()">Да</button>
                    <button class="btn btn-success" @click="HideDialog()">Нет</button>
                </div>
            </div>
        </div>
    </transition-group>
</template>
<script>
export default {
    data() {
        return {
            IsVisibleDialogExit: true,
        }
    },
    methods: {
        AcceptExit() {
            this.$router.push('/')
        },
        HideDialog() {
            this.IsVisibleDialogExit = false;
        },
    }
}
</script>
