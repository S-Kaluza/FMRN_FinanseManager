import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { IComponentRoutingProps } from '../../navigation/navigation.types';

//TODO -- add inflation monitor screen

function InflationMonitorScreen({ navigation }: IComponentRoutingProps) {
  return (
    <View>
      <Text>Inflation Monitor Screen</Text>
      <BottomSheet navigation={navigation} />
    </View>
  );
}

export default InflationMonitorScreen;
