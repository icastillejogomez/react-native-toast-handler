import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'aba'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '894'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '354'),
            routes: [
              {
                path: '/docs/about',
                component: ComponentCreator('/docs/about', '8c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analytics/events',
                component: ComponentCreator('/docs/analytics/events', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/analytics/identify-toast',
                component: ComponentCreator('/docs/analytics/identify-toast', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/expo-router',
                component: ComponentCreator('/docs/examples/expo-router', 'ef4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/modals',
                component: ComponentCreator('/docs/examples/modals', '09d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '07c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/instalation',
                component: ComponentCreator('/docs/instalation', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/animating_timeout',
                component: ComponentCreator('/docs/usage/animating_timeout', '96a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/default-values',
                component: ComponentCreator('/docs/usage/default-values', 'df1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/extra_data',
                component: ComponentCreator('/docs/usage/extra_data', '130'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/hide-toast',
                component: ComponentCreator('/docs/usage/hide-toast', 'c2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/remove-toast',
                component: ComponentCreator('/docs/usage/remove-toast', '6e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/render-toast-function',
                component: ComponentCreator('/docs/usage/render-toast-function', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/show-toast',
                component: ComponentCreator('/docs/usage/show-toast', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/statuses',
                component: ComponentCreator('/docs/usage/statuses', '393'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/usage/toast-callbacks',
                component: ComponentCreator('/docs/usage/toast-callbacks', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
