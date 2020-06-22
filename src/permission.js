/* import router from '@/router/index';
router.beforeEach((to, from, next) => {
  const isLogin = BASE.isLogin;
  if (to.path === '/login') {
    if (isLogin) {
      next('/');
    } else {
      next();
    }
  } else {
    if (isLogin) {
      next();
    } else {
      next('/login');
    }
  }
}); */
