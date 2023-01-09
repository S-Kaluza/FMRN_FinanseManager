import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { IComponentRoutingProps } from '../../navigation/navigation.types';

//TODO -- add currency converter screen

function CurrencyConverterScreen({ navigation }: IComponentRoutingProps) {
  return (
    <View>
      <Text>Currency Converter Screen</Text>
      <BottomSheet navigation={navigation} />
    </View>
  );
}

export default CurrencyConverterScreen;
