import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { IComponentRoutingProps } from '../../navigation/navigation.types';

//TODO -- Add analytics screen

function AnalyticsScreen({ navigation }: IComponentRoutingProps) {
  console.log('AnalyticsScreen');
  return (
    <View>
      <Text>AnalyticsScreen</Text>
      <BottomSheet navigation={navigation} />
    </View>
  );
}

export default AnalyticsScreen;
