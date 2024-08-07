import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../constants/Colors';
import { iconSizes, spacing } from '../constants/Dimension';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome5
            name={'grip-lines'}
            colors={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name={'search1'}
            colors={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing.md,
    
  },
});
