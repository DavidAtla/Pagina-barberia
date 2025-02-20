const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'nuestros-cursos',
        name: 'nuestros-cursos',
        component: () => import('pages/NuestrosCursosPage.vue'),
      },
      {
        path: 'academy',
        name: 'academy',
        component: () => import('pages/AcademyPage.vue'),
      },
      {
        path: 'testimonios',
        name: 'testimonios',
        component: () => import('pages/TestimonioPage.vue'),
      },
      {
        path: 'contacto',
        name: 'contacto',
        component: () => import('pages/ContactosPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
