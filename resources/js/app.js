require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
import MasterTemplate from "./layouts/MasterTemplate.vue";
import Navbar from "./components/Navbar.vue";
import GooglePlace from "./components/GooglePlace.vue";

Vue.use(VueRouter);

Vue.component(
    "master-template",
    require("./layouts/MasterTemplate.vue").default
);

Vue.component("navbar-component", Navbar);

const routes = [
    {
        path: "/",
        component: MasterTemplate,
        children: [
            {
                path: "/place",
                component: GooglePlace
            }
        ]
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router,
    el: "#app"
});
