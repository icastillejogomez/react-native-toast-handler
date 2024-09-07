---
id: docs-usage-default-values
title: Default values
sidebar_position: 1
sidebar_label: Default values
slug: /usage/default-values
---

# Default values

Como habrás podido observar, toda la mágica ocurre dentro del componente `ToastProvider`. Este componente tiene tres propiedades obligatorias que son `renderToast`, `defaultBottomOffset` y `defaultTopOffset` pero existen muchas otras propiedades que son opcionales. 

:::info
Recuerda que puedes ver todas las propiedades del componente [aquí](/docs/reference/components/toast-provider).
:::

Como hemos dicho existen muchas propiedades opcionales dentro del componente `ToastProvider`. Unas de ellas nos servirán para monitorizar analíticas de nuestros toasts y otras nos van a servir para configurar ciertos aspectos comunes de nuestros toasts por defecto.

Cuando mostramos un toast con la función `showToast` de nuestro hook `useToast`, podemos configurar ciertos aspectos de este toast, pero... ¿Y si queremos ajustar los aspectos por defecto que tendran todos los toasts? Eso es lo que vamos a ver a continuación.

### Position

Nuestros toasts se pueden posicionar tanto en la parta superior como en la parte inferior de la pantalla (el de la View padre del ToastProvider). Por defecto, los toasts se posicionan en la parte superior de la pantalla pero podemos indicar la posición por defecto de la siguiente manera:

```jsx
<ToastProvider
  // highlight-next-line
  defaultPosition="bottom"
>
  ...
</ToastProvider>
```

:::info
Obtén más información [aquí](/docs/reference/types/toast-position).
:::

### Position offsets

Para saber donde deben posicionarse los toasts, es necesario saber a que distancía de la parte superior o inferior de la pantalla (el del View padre del ToastProvider) deben situarse. Como cada aplicación es diferente (unas tienen headers customizados, otras navegación con tabs, etc.) es necesario que cada aplicación pueda configurar estos valores de manera individual.

```jsx
<ToastProvider
  // highlight-start
  defaultTopOffset={70}
  defaultBottomOffset={100}
  // highlight-end
  ...
>
  ...
</ToastProvider>
```

Estos valores serán usados para establecer la propiedad `top` y `bottom` de cada toast, que también usarán posicionamiento absoluto.

### Margin horizontal

Cuando se muestra el toast en la pantalla, este puede tener un ancho máximo determinado por el tamaño de la pantalla (o el tamaño del View padre del ToastProvider). Este valor por defecto es 16, pero puedes cambiarlo de acuerdo a tus necesidades:

```jsx
<ToastProvider
  ...
  // highlight-next-line
  defaultMarginHorizontal={16}
>
  ...
</ToastProvider>
```

Este valor se usará para establecer el `marginHorizontal` de cada toast, que también usará posicionamiento absoluto.

:::info
El contenido del toast no tiene porque expandise ni usar todo el ancho disponible
:::

### Swipe directions

Esta propiedad nos sirve para indicar hacía que dirección se puede deslizar el toast para cerrarlo. Por defecto es un array vacío, lo que quiere decir que no se puede deslizar el toast hacía ninguna dirección.

```jsx
<ToastProvider
  ...
  // highlight-next-line
  defaultSwipeDirection="up" // <- También puede ser ['right', 'left']
>
  ...
</ToastProvider>
```

:::info
Obtén más información [aquí](/docs/reference/types/toast-swipe-direction).
:::

### Close on tap

Esta propiedad nos sirve para indicar si al hacer press (or tap) en el toast, se debe cerrar automáticamente. Por defecto el valor es `false`.

```jsx
<ToastProvider
  ...
  // highlight-next-line
  defaultCloseOnTap
>
  ...
</ToastProvider>
```

### Hit slop

Esta propiedad nos sirve para indicar el tamaño de la área donde se puede hacer press (or tap) en el toast. El valor por defecto es el valor por defecto de esta propidad en el componente [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback) de React Native.

```jsx
<ToastProvider
  ...
  // highlight-next-line
  hitSlop={10}
>
  ...
</ToastProvider>
```

### Pass close handler

Esta propiedad nos sirve para indicar si el toast debe pasar el manejador de cierre al render de la propiedad `renderToast`. Por defecto el valor es `false`. Si queremos que nuestros toasts pueden cerrarse ellos mismos, debemos activar esta propiedad:

```jsx
<ToastProvider
  ...
  // highlight-next-line
  defaultPassCloseHandler
>
  ...
</ToastProvider>
```

