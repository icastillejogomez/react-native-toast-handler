import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import type { RenderToastProps } from 'react-native-toast-handler';

export type TimeoutToastProps = RenderToastProps & {};

const TimeoutToast: FC<TimeoutToastProps> = ({ title, message, progressToBeClosed }) => {
  const widthP = useDerivedValue(() => {
    return withSpring(`${interpolate(progressToBeClosed.value, [0, 1], [0, 100], Extrapolation.CLAMP)}%`);
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthP.value,
    };
  });

  return (
    <View style={[styles.card]}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.header}>{title && <Text style={styles.title}>{title}</Text>}</View>
          <Text style={styles.message}>{message}</Text>
        </View>
        <View style={styles.progressBarWrapper}>
          <Animated.View style={[styles.progressBar, animatedStyle]} />
        </View>
      </View>
    </View>
  );
};
TimeoutToast.displayName = 'TimeoutToast';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexGrow: 1,
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
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
  },
  progressBarWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  progressBar: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 4,
    width: '50%',
  },
});

export { TimeoutToast };
