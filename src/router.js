import { createRouter, createWebHistory } from "vue-router";
import Booking from "./views/Booking.vue";
import Genres from "./views/Genres.vue";
import Home from "./views/Home.vue";
import Lists from "./views/Lists.vue";
import LogIn from "./views/LogIn.vue";
import Onboarding1 from "./views/Onboarding1.vue";
import Onboarding2 from "./views/Onboarding2.vue";
import Onboarding3 from "./views/Onboarding3.vue";
import SignUp from "./views/SignUp.vue";

const routes = [
  { path: "/", name: "Onboarding1", component: Onboarding1 }, // Changed from Home to Onboarding1
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  }, // Home moved to /home
  { path: "/login", name: "Login", component: LogIn, meta: { authPage: true } },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: { authPage: true },
  },
  { path: "/onboarding1", name: "Onboarding1", component: Onboarding1 },
  { path: "/onboarding2", name: "Onboarding2", component: Onboarding2 },
  { path: "/onboarding3", name: "Onboarding3", component: Onboarding3 },
  {
    path: "/genres",
    name: "Genres",
    component: Genres,
    meta: { requiresAuth: true },
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
    meta: { requiresAuth: true },
  },
  {
    path: "/lists",
    name: "Lists",
    component: Lists,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const currentOnboard = localStorage.getItem("currentOnboard");

  // Redirect root path to onboarding if not authenticated
  if (to.path === "/" && !isAuthenticated) {
    next({ name: "Onboarding1" });
  }
  // If user is authenticated and tries to go to root, redirect to home
  else if (to.path === "/" && isAuthenticated) {
    next({ name: "Home" });
  }
  // If user tries to access protected routes without auth, redirect to onboarding
  else if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Onboarding1" });
  }
  // Your existing auth page logic
  else if (to.meta.authPage && !isAuthenticated) {
    if (currentOnboard == "1") {
      next({ name: "Onboarding2" });
    } else if (currentOnboard == "2") {
      next({ name: "Onboarding3" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
