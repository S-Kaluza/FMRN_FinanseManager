import { Dimensions, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './BottomSheet.style';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import FontAvesome from 'react-native-vector-icons/FontAwesome';
import { IComponentRoutingProps } from '../../navigation/navigation.types';

function BottomSheet({ navigation }: IComponentRoutingProps) {
  console.log('BottomSheet');
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');
  const MIN_TRANSLATE_Y = SCREEN_HEIGHT / 3;
  const translateY = useSharedValue(MIN_TRANSLATE_Y - SCREEN_HEIGHT * 0.12);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT / 10);
      translateY.value = Math.min(translateY.value, MIN_TRANSLATE_Y);
      //console.log(SCREEN_HEIGHT / 10 - translateY.value);
      console.log(0 + (SCREEN_HEIGHT / 10 - translateY.value) / 85);
    })
    .onEnd(e => {
      if (e.translationY < SCREEN_HEIGHT / 7) {
        translateY.value = withSpring(-SCREEN_HEIGHT * 0.05, {
          damping: 10,
          stiffness: 100,
        });
      } else if (e.translationY > SCREEN_HEIGHT / 7) {
        translateY.value = withSpring(MIN_TRANSLATE_Y - SCREEN_HEIGHT * 0.12, {
          damping: 10,
          stiffness: 100,
        });
      }
    });
  const rBottomSheetContainer = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const lBottomSheetContainer = useAnimatedStyle(() => {
    return {
      opacity: 1 - (-SCREEN_HEIGHT / 10 + translateY.value) / 100,
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[styles.bottomSheetContainer, rBottomSheetContainer]}>
        <View style={styles.line} />
        <Animated.View style={[styles.iconContainer, lBottomSheetContainer]}>
          <TouchableOpacity
            onPress={() => navigation?.navigate('Analytics')}
            style={styles.iconWrapper}>
            <FontAvesome name="line-chart" color="#000" size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation?.navigate('CurrencyConverter')}
            style={styles.iconWrapper}>
            <FontAvesome name="calculator" color="#000" size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation?.navigate('Dashboard')}
            style={styles.iconWrapper}>
            <FontAvesome name="list-alt" color="#000" size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation?.navigate('DevScreen')}
            style={styles.iconWrapper}>
            <FontAvesome name="terminal" color="#000" size={50} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation?.navigate('InflationMonitor')}
            style={styles.iconWrapper}>
            <FontAvesome name="area-chart" color="#000" size={50} />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

export default BottomSheet;
