---
id: docs-usage-satuses
title: Statuses of toasts in React Native Toast Handler
sidebar_position: 3
sidebar_label: Statuses
slug: /usage/statuses
---

# Manage toast statuses

## ¿Qué son los statuses?

Cómo has podido leer en la página [Render toast function](/docs/usage/render-toast-function), esta librería no trata de ofrecer ningún tipo de diseño para los toasts. Sin embargo, es cierto que existen diferentes tipos de toasts que se pueden mostrar en una aplicación. A veces queremos mostrar un toast de error, otras de éxito, etc.

Los statuses son una cadena de texto que nos ayudará a identificar el tipo de toast que queremos mostrar.

## Tipos de statuses

La realidad, es que no existe una lista de tipos de toasts definida por parte de esta librería. Como hemos mencionado anteriormente, no es nuestro trabajo decir si en tu aplicación hay uno, dos o cinco tipos de toasts diferentes. Es por ello que los statuses válidos son cualquier cadena de texto (incluso la cadena vacía).

Cuando vayas a mostrar un toast a través de la función `showToast` de tu hook `useToast`, puedes configurar el propiedad `status` de esta función para indicar el tipo de toast que queremos mostrar:

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'whatever-I-want',
  });
}, [showToast])

...
```

## Cómo gestionar los diferentes tipos de statuses

Para gestionar los diferentes tipos de statuses, debes checkear el valor del propiedad `status` de cada toast que se muestre en tu aplicación. Esto lo podrás hacer en la función `renderToast` del componente `ToastProvider`:

```jsx
<ToastProvider
  ...
  renderToast={({ status, ...rest }) => {
    switch(status) {
      case 'error':
        return <ErrorToast {...rest} />;
      case 'success':
        return <SuccessToast {...rest} />;
      case 'whatever-I-want':
        return <WhateverIWantToast {...rest} />;
      default:
        return <DefaultToast {...rest} />;
    }
  }}
>
  ...
</ToastProvider>
```
