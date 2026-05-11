import React, { useState, useEffect } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Dropdown from 'react-native-input-select';

import { styles } from './style';

const SelectPopup = (props: options, variable, setVariable, ref) => {
  return (
    <Dropdown
      options={props.options}
      selectedValue={props.variable}
      onValueChange={(value) => props.setVariable(value)}
      ref={props.ref}
      dropdownStyle={styles.dropdown}
      dropdownContainerStyle={styles.dropdownContainer}
      primaryColor={"green"}
    />
  );
}

export default SelectPopup;
