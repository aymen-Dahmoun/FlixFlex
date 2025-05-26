import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
    const { showId, type } = route.params;
    console.log('DetailsScreen', showId, type);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Details Screen</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10, backgroundColor: 'rgb(255, 115, 0)', borderRadius: 5 }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Go Back</Text>
        </TouchableOpacity>
        </View>
    );
}