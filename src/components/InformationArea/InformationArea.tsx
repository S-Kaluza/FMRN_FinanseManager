import React from 'react';
import { View, Text } from 'react-native';
import { InformationAreaProps } from './InformationArea.types';

//TODO - create information area component

function InformationArea(props: InformationAreaProps) {
  return (
    <View>
      <Text>{props.information}</Text>
    </View>
  );
}

export default InformationArea;
