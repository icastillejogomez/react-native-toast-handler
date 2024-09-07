---
id: docs-usage-remove-toast
title: Remove toasts in React Native Toast Handler
sidebar_position: 7
sidebar_label: Remove toasts
slug: /usage/remove-toast
---

# Remove toast

Debido a que existe un sistema de colas para manejar los toasts, es posible que transcurra un tiempo desde que se solicita que se muestre el toast hasta que se se pueda mostrar. Debido a que no es posible conocer este tiempo existen dos maneras de eliminar un toast que aún no se ha mostrado y está en cola. La primera es una eliminación manual, imperativa. La segunda es estableciendo un TTL (Time To Live) para el toast.

## Manually

Para eliminar un toast manualmente necesitamos saber el `id` del toast que queremos eliminar. Este valor lo obtenemos trás llamar a la función `showToast` del hook `useToast` y almacenarlo en una variable.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const [id, setId] = useState<string | null>(null);

const handlePress = useCallback(() => {
  const id = showToast({
    message: 'Hello world',
    status: 'info',
  });

  setId(id);
}, [setId, showToast])

...
```

Para eliminarlo, solo tenemos que llamar a la función `removeToast` del hook `useToast` con el `id` que obtuvimos en el paso anterior.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const [id, setId] = useState<string | null>(null);

const handleRemoveToast = useCallback((toastId: number) => {
  removeToast(toastId);
}, [removeToast])

return (
  <Button
    disabled={!id}
    title="Remove toast"
    onPress={() => {
      handleRemoveToast(id);
    }}
)

...
```

## Expiration with TTL

El TTL (Time To Live) es un valor que se puede establecer en el propiedad `ttl` de la función `showToast`. Este valor es el tiempo en segundos que el toast permanecerá en la cola. Si el TTL se cumple, el toast se eliminará automáticamente si aún no se ha mostrado.

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    ttl: 10, // <- Time to live in seconds
  });
}, [showToast])

...
```

:::note
Si no se establece el TTL, el toast permanecerá en la cola hasta que se haya mostrado.
:::
