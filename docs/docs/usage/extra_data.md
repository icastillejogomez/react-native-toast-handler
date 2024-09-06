---
id: docs-usage-extra-data
title: How to pass extra data to toast in React Native Toast Handler
sidebar_position: 8 
sidebar_label: Pass extra data to toast
slug: /usage/extra_data
---

# Pass extra data to toast

There are going to be some cases where you want to pass extra data to the toast becasuse, by default, the toasts only have the `message` and the optional `title` properties. But, if you need to pass more data, you can do it by using the `extraData` property.


:::note
The `extraData` property is optional.
:::

## Example

### Passing extra data to the toast

```jsx
...
import { useToast } from 'react-native-toast-handler';
...

const handlePress = useCallback(() => {
  showToast({
    message: 'Hello world',
    status: 'info',
    extraData: {
      name: 'John Doe',
      age: 30,
    },
  });
}, [showToast])

...
```
