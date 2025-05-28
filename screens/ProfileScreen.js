import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthProvider'; // Adjust path if needed
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../firebaseClient';

export default function UserScreen({navigation}) {
    const { user } = useAuth(); // Assuming user has an `email` field
    const handleLogout = async () => {
        try {
        await signOut(firebaseAuth);
        console.log('Logged out');
        navigation.replace('Login')
        } catch (err) {
        console.error(err);
        }
  };
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20, fontWeight:'800' }}>
        {user?.email}
      </Text>

        <TouchableOpacity style={{ 
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: 'rgb(255, 115, 0)',
            borderRadius: 40,
            width: 200,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center', 
            margin:20,
            }}
            onPress={()=> navigation.navigate('Favorite')}>
            <Text style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'rgb(255, 115, 0)',}}>Favorites</Text>
        </TouchableOpacity>
      <TouchableOpacity style={{ 
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: 'rgb(255, 115, 0)',
              borderRadius: 40,
              width: 200,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf:'center', 
              margin:20,
              }}
              onPress={handleLogout}>
              <Text style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: 'rgb(255, 115, 0)',}}>Log Out</Text>
            </TouchableOpacity>
    </View>
  );
}
