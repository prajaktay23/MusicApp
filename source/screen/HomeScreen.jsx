import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

//constants
import {colors} from '../constants/Colors';
import {iconSizes, spacing} from '../constants/Dimension';

//icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headingText}>Recommended for you</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  headingText: {
    fontSize: 25,
    color: colors.textPrimary,

  }
 
});
