require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
import Vuex from "vuex";
import MasterTemplate from "./layouts/MasterTemplate.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import GooglePlace from "./components/GooglePlace.vue";
import JenosizeMap from "./components/JenosizeMap.vue";
import Series from "./components/Series.vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyAhed0HbWB8GwMMy-b9Ghs288hKPuIlS4Y"
    }
});

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.component(
    "master-template",
    require("./layouts/MasterTemplate.vue").default
);

Vue.component("navbar-component", Navbar);
Vue.component("footer-component", Footer);

const routes = [
    {
        path: "/",
        component: MasterTemplate,
        children: [
            {
                path: "/place",
                component: GooglePlace
            },
            {
                path: "/map",
                component: JenosizeMap
            },
            {
                path: "/series",
                component: Series
            }
        ],
        redirect: "/place"
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const store = new Vuex.Store({
    state: {
        search: null
    },
    mutations: {
        searchPlace(state, search) {
            state.search = search;
        }
    },
    getters: {
        search: state => state.search
    }
});

const app = new Vue({
    router,
    store,
    el: "#app"
});
