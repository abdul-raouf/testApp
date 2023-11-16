/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

interface ChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const Chip = (props: ChipProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={[
        styles.chip,
        {
          backgroundColor: props.selected ? '#E3F2FD' : '#E8EBF0',
        },
      ]}>
      <Text style={[styles.text, {color: props.selected ? '#000000' : '#000000'}]}>{props.label}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  chip: {
    marginRight: 4,
    padding: 5,
    borderRadius: 6,
    minWidth: 80,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Chip;
