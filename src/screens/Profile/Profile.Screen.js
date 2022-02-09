import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Profile Screen</Text>
          <Icon name="arrow-back" size={20} color="#000" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
