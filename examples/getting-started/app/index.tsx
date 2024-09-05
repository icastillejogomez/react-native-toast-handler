import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useToast } from 'react-native-toast-handler';

const IndexScreen = () => {
  const { showToast } = useToast();

  return (
    <View style={styles.container}>
      <Button
        title="Show toast"
        onPress={() => {
          showToast({
            message: 'Hello world',
            status: 'info',
          });
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
