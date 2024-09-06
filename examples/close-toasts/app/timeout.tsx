import { Button, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { useToast } from 'react-native-toast-handler';

const TimeoutScreen = () => {
  const { showToast } = useToast();

  const handlePress = useCallback(() => {
    showToast({
      title: '🚀 Toast with timeout',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      status: 'timeout',
      duration: 5,
    });
  }, [showToast]);

  return (
    <View style={styles.container}>
      <Button title="Show toast" onPress={handlePress} />
    </View>
  );
};

export default TimeoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
