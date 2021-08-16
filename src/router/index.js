import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0};
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import( '../views/login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import( '../views/register.vue')
        },
        {
            path: '',
            component: () => import( '../views/users/main.vue'),
            children: [
                {
                    path: '/bus-route',
                    name: 'Bus Route',
                    component: () => import( '../views/users/busRoute.vue')
                },
                {
                    path: '/bus-route/seats',
                    name: 'Sheet Booking',
                    component: () => import( '../views/users/seatsBooking.vue')
                },
            ]
        },
    ]

});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById("loading-bg");
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

export default router;
