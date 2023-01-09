import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { IComponentRoutingProps } from '../../navigation/navigation.types';

//TODO -- add dev screen

function DevScreen({ navigation }: IComponentRoutingProps) {
  console.log('DevScreen');

  return (
    <View>
      <Text>DevScreen</Text>
      <BottomSheet navigation={navigation} />
    </View>
  );
}
export default DevScreen;
