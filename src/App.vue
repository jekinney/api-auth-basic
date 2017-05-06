<template>
    <div id="app">
        <header-menu></header-menu>
        <router-view></router-view>
        <login-modal></login-modal>
        <register-modal></register-modal>
    </div>
</template>

<script>
    import HeaderMenu from '@/components/Header'
    import LoginModal from '@/components/auth/LoginModal'
    import RegisterModal from '@/components/auth/RegisterModal'
    import { mapGetters } from 'vuex'

    export default {
        name: 'app',
        components: {
            HeaderMenu,
            LoginModal,
            RegisterModal
        },
    }
</script>

<style lang="sass">
    @import '../node_modules/bulma/bulma'
</style>
