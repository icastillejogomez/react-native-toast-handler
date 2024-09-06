import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RenderToastProps } from 'react-native-toast-handler';

export type DefaultToastProps = RenderToastProps;

const DefaultToast: FC<DefaultToastProps> = ({ title, message }) => {
  return (
    <View style={styles.card}>
      {title && <Text>{title}</Text>}
      <Text>{message}</Text>
    </View>
  );
};
DefaultToast.displayName = 'DefaultToast';

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

export { DefaultToast };
