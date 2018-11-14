<template>
    <q-page padding>
        <q-input v-model="text" />
        <q-btn @click="browser" label="enter" />
    </q-page>
</template>

<script>
    export default {
        data() {
            return {
                text: "https://abao.maijju.com/#/"
            };
        },
        methods: {
            browser() {
                location.href = this.text;
            }
        }
    };
</script>

<style>
</style>
