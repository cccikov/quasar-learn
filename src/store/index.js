console.log("vuex");
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        vuex_view: "hHh LpR fFf",
        xRoleName: null,
        xRoleType: null,
        xUserName: "",
        xLogo: "",
        xLocation: {}, // 定位城市
        xSelectCity: {
            cityId:'',
            cityLabel:'全国'
        }, // 选择的城市
        showDev: true, // 是否显示开发中的模块
    },
    getters: {
        // 是否企业
        xIsCom(state) {
            return state.xRoleType == 2;
        },
        // 是否经销商
        xIsDst(state) {
            return state.xRoleType == 3;
        },
        // 是否店长
        xIsShop(state) {
            return state.xRoleType == 4;
        },
        // 是否分销专员
        xIsDR(state) {
            return state.xRoleType == 5;
        }
    },
    mutations: {
        xInitRole(state, val) {
            state.xRoleType = val.roletype;
        },
        xSetUser(state, val) {
            state.xUserName = val.userName;
            state.xLogo = val.logo;
        },
        // 设置定位城市
        xSetLocation(state, val) {
            state.xLocation = val.location;
        },
        // 设置选择的城市
        xSetSelectCity(state, val) {
            state.xSelectCity = val.city;
        },
        // 改变显示开发中的模块
        changeShowDev(state){
            state.showDev = true;
        }
    }
});




export default store