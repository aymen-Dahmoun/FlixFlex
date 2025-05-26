import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function TopNavBar({ navigation, title }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', padding: 10, backgroundColor: 'rgb(255, 115, 0)', width: '100%' }}>
        
        <IconButton
            icon='menu'
            size={24}
            color="rgb(255, 115, 0)"
            onPress={() => navigation.openDrawer()}
            style={{ marginRight: 10 }} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Back</Text>
        </TouchableOpacity>
        
    </View>
  );
}