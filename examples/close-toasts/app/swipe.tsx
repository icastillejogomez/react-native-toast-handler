import { Button, Platform, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { useToast } from 'react-native-toast-handler';

const SwipeScreen = () => {
  const { showToast } = useToast();

  const handlePress = useCallback(() => {
    showToast({
      title: '🚀 Toast with timeout',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      status: 'info',
      closeOnTap: false,
      position: 'top',
      swipeDirection: Platform.OS === 'ios' ? ['left', 'right'] : 'up',
    });
  }, [showToast]);

  return (
    <View style={styles.container}>
      <Button title="Show toast" onPress={handlePress} />
    </View>
  );
};

export default SwipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
