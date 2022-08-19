import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  bgColor?: string;
  doubleWidth?: boolean;
  onPressHandler: (input: string) => void
}

export function CalcButton({ text, bgColor = '#333', doubleWidth = false, onPressHandler}: Props) {
  return (
    <TouchableOpacity onPress={() => onPressHandler(text)}>
      <View style={{
        ...styles.button,
        backgroundColor: bgColor,
        width: (doubleWidth) ? 180 : 80
      }}>
        <Text style={{
          ...styles.buttonFont,
          color: (bgColor === 'grey') ? 'black' : 'white'
        }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
