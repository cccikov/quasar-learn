import vuex from 'vuex'
console.log("main");
export default ({
    Vue
}) => {
    Vue.mixin({
        computed: {
            ...vuex.mapState(["qrcode","vuex_view", "xRoleType", "xUserName", "xLogo", "xLocation", "xSelectCity", "showDev"]),
            ...vuex.mapGetters(["xIsCom", "xIsDst", "xIsShop", "xIsDR"]),
        },
        methods:{
            ...vuex.mapMutations(["changeQrcode","xInitRole", "xSetUser", "xSetLocation", "xSetSelectCity", "changeShowDev"]),
        }

    });
    Vue.prototype.bus = new Vue();
}
