import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedButtonProps } from './AnimatedButton.types';

//TODO -- create a button that animates when pressed
function AnimatedButton(props: AnimatedButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AnimatedButton;
