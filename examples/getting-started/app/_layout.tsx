/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ToastProvider } from 'react-native-toast-handler';

function Toast({ message }: { message: string }) {
  return (
    <View style={styles.card}>
      <Text>{message}</Text>
    </View>
  );
}

function Navigator() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Getting started' }} />
    </Stack>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <ToastProvider
          defaultBottomOffset={100}
          defaultTopOffset={120}
          renderToast={({ message }) => <Toast message={message} />}
        >
          <Navigator />
        </ToastProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
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
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
