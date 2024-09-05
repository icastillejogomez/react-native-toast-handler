---
id: docs-getting-started
title: Getting started with React Native Toast Handler
sidebar_position: 3
sidebar_label: Getting started
slug: /getting-started
---

# Getting started

## Toast provider - Wraping your application

First you need to wrap you application, or the component where you want to display the toasts, with the ToastProvider component. This component will handle the toasts positioning and the animations:

:::info
Is not mandatory to wrap you ToastProvider with a SafeAreaView but take into account that the ToastWrapper (the component inside the ToastProvider which are going to position the toast) will be rendered as a absolute positioned view. The values of bottom offset and top offset will be relative to the parent view. **This library is not going to handle the safe areas insets**.
:::

```jsx
/* ... */
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-handler';
/* ... */


function Toast({ message }) {
  return (
    <View style={styles.card}>
      <Text>{message}</Text>
    </View>
  );
}

function Navigator() {
  return (
    <Stack>
      {/* ... */}
    </Stack>
  )
}


export default function App() {
  return (
    <SafeAreaView>
      <ToastProvider
        defaultBottomOffset={100}
        defaultTopOffset={70}
        renderToast={({ message }) => <Toast message={message} />}
      >
        <Navigator />
      </ToastProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

```

:::note[Learn about the render function]
You can learn more about the render function in the [render toast function](/docs/usage/render-toast-function) page.
:::


## Showing a toast

To show a toast you need to call the `showToast` function from the [useToast](/docs/hooks/useToast) hook:

```jsx
import { useToast } from 'react-native-toast-handler';

function MyComponent() {
  const { showToast } = useToast();

  return (
    <Button
      title="Show toast"
      onPress={() => {
        showToast({
          message: 'Hello world',
          status: 'info',
        });
      }}
    />
  );
}
```

:::note[Learn about the statuses]
You can learn more about the statuses in the [statuses](/docs/usage/statuses) page.
:::
