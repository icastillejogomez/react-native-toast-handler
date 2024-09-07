---
id: docs-analytics-events
title: Analtics events of React Native Toast Handler
sidebar_position: 2
sidebar_label: Toast events
slug: /analytics/events
---

# React Native Toast Handler toast events

## Introduction

Now that we know how to identify all the toasts in our application, we can start to track the toasts events. All these events are tracked through the [ToastProvider](/docs/reference/components/toast-provider) component.

```jsx
...
import { ToastProvider } from 'react-native-toast-handler';
...

function App() {
  return (
    <ToastProvider
      renderToast={(props) => <MyToastComponent {...props} />}
      topOffset={100}
      bottomOffset={100}
      // highlight-next-line
      ...
    >
      {/* ... */}
    </ToastProvider>
  );
}
```

## onPush

The `onPush` callback is called when the toast is pushed to the queue.

```jsx
...
import { ToastProvider } from 'react-native-toast-handler';
...

function App() {
  return (
    <ToastProvider
      renderToast={(props) => <MyToastComponent {...props} />}
      topOffset={100}
      bottomOffset={100}
      // highlight-start
      onPush={(toast) => {
        console.log('Toast is pushed to the queue', toast);
      }}
      // highlight-end
      ...
    >
      {/* ... */}
    </ToastProvider>
  );
}
```

## onShow

The `onShow` callback is called when the toast is shown on the screen. Just before the entering animation starts.

```jsx
...
import { ToastProvider } from 'react-native-toast-handler';
...

function App() {
  return (
    <ToastProvider
      renderToast={(props) => <MyToastComponent {...props} />}
      topOffset={100}
      bottomOffset={100}
      // highlight-start
      onShow={(toast) => {
        console.log('Toast is showing', toast);
      }}
      // highlight-end
      ...
    >
      {/* ... */}
    </ToastProvider>
  );
}
```

## onClose

The `onClose` callback is called when the toast is closed. The event is fired just after the exiting animation ends.

```jsx
...
import { ToastProvider } from 'react-native-toast-handler';
...

function App() {
  return (
    <ToastProvider
      renderToast={(props) => <MyToastComponent {...props} />}
      topOffset={100}
      bottomOffset={100}
      // highlight-start
      onClose={(toast, method) => {
        console.log('Toast is closing', toast, method);
      }}
      // highlight-end
      ...
    >
      {/* ... */}
    </ToastProvider>
  );
}
```
