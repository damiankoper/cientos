export const stagingRoutes = [
  {
    path: '/staging/smoke',
    name: 'Smoke',
    component: () => import('../../pages/staging/SmokeDemo.vue'),
  },
  {
    path: '/staging/precipitation',
    name: 'Precipitation',
    component: () => import('../../pages/staging/PrecipitationDemo.vue'),
  },
  {
    path: '/staging/stars',
    name: 'Stars',
    component: () => import('../../pages/staging/StarsDemo.vue'),
  },
    
  {
    path: '/staging/environment',
    name: 'Environment',
    component: () => import('../../pages/staging/EnvironmentDemo.vue'),
  },
  {
    path: '/staging/backdrop',
    name: 'Backdrop',
    component: () => import('../../pages/staging/BackdropDemo.vue'),
  },
  {
    path: '/staging/contact-shadows',
    name: 'ContactShadows',
    component: () => import('../../pages/staging/ContactShadowsDemo.vue'),
  },
]