import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { IComponentRoutingProps } from '../../navigation/navigation.types';

//TODO -- add dashboard screen

function DashboardScreen({ navigation }: IComponentRoutingProps) {
  return (
    <View>
      <Text> Dashboard screen </Text>
      <BottomSheet navigation={navigation} />
    </View>
  );
}

export default DashboardScreen;
