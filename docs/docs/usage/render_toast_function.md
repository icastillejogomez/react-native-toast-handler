---
id: docs-usage-render-toast-function
title: The render toast function of React Native Toast Handler
sidebar_position: 2
sidebar_label: Render toast function
slug: /usage/render-toast-function
---

# The renderToast function

## ¿Por qué existe (y es obligatoría) la propiedad renderToast?

Como hemos visto en la página [Getting started](/docs/gettings-started), el componente ToastProvider tiene una propiedad llamada `renderToast` que es una función que se encarga de renderizar el toast. 

```jsx
<ToastProvider
  ...
  renderToast={(props) => (
    {/* Whatever you want to render */}
  )}
>
  ...
</ToastProvider>
```


Esta librería trata de ayudar en la gestión de los toasts (o notificaciones) pero no de diseñarlos. Es común ver librerías que a menudo tienen un diseño por defecto para los toasts, que nunca coincide con nuestra identidad visual y el de nuestra empresa o producto. Es por eso que estas librerías ofrecen la capacidad de personalizar estos toasts y aquí esta el problema: ofrecen una personalización pero no el control total.

El enfoque de esta librería es que tu diseñes los toasts como tu quieras, siguiendo tus reglas de diseño y dejes en manos de esta librería la gestión de las colas de los toasts y el posicionamiento, los gestos, los timeouts, etc.

:::warning
Esta librería ni siquiera hace el renderizado de las cards de los toasts ni gestiona el dark y light mode. 
:::