import { Button, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { useToast } from 'react-native-toast-handler';

const OnTapScreen = () => {
  const { showToast } = useToast();

  const handlePress = useCallback(() => {
    showToast({
      message: 'Hello world',
      status: 'info',
      closeOnTap: true,
    });
  }, [showToast]);

  return (
    <View style={styles.container}>
      <Button title="Show toast" onPress={handlePress} />
    </View>
  );
};

export default OnTapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
