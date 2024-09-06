import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <Link href="/on-tap" style={styles.text}>
        Closing on tap
      </Link>
      <Link href="/timeout" style={styles.text}>
        With timeout
      </Link>
      <Link href="/on-tap" style={styles.text}>
        Swiping it
      </Link>
      <Link href="/on-tap" style={styles.text}>
        Manually
      </Link>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
  },
});
