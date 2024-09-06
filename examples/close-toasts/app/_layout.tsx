import React from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-handler';

import { DefaultToast, TimeoutToast } from '@/components';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ToastProvider
        defaultBottomOffset={100}
        defaultTopOffset={120}
        defaultMarginHorizontal={32}
        renderToast={(props) => {
          switch (props.status) {
            case 'timeout':
              return <TimeoutToast {...props} />;
            default:
              return <DefaultToast {...props} />;
          }
        }}
      >
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="on-tap" options={{ headerTitle: 'Closing on tap', headerBackTitle: 'Back' }} />
          <Stack.Screen name="timeout" options={{ headerTitle: 'Timeout', headerBackTitle: 'Back' }} />
          <Stack.Screen name="swipe" options={{ headerTitle: 'Swipe to close', headerBackTitle: 'Back' }} />
        </Stack>
      </ToastProvider>
    </GestureHandlerRootView>
  );
}
