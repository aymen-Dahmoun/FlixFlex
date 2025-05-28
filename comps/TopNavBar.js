import { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';
import useSearch from '../hooks/useSearch';

export default function TopNavBar({ title }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { result, loading, err } = useSearch(searchQuery);
  
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={{
      flexDirection: 'column',
      backgroundColor: 'rgb(255, 115, 0)',
      width: '100%',
      padding: 10,
      height: 'auto'
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Searchbar
          placeholder="Search"
          onChangeText={handleSearchChange}
          value={searchQuery}
          style={{ flex: 1, marginRight: 10, backgroundColor: 'rgba(255, 255, 255, 0.49)' }}
        />
      </View>
      {searchQuery.length > 0 && (
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          marginTop: 8,
          padding: 8,
          maxHeight: 200,
        }}>
          {loading && <ActivityIndicator color="orange" />}
          {err && <Text style={{ color: 'red' }}>Error: {err.message}</Text>}
          {result && result.length > 0 ? (
            result.map((item, idx) => (
              <TouchableOpacity key={item.id || idx} style={{ paddingVertical: 8 }}>
                <Text>{item.name || item.title || item.original_name || item.original_title}</Text>
              </TouchableOpacity>
            ))
          ) : !loading && (
            <Text style={{ color: '#888' }}>No results</Text>
          )}
        </View>
      )}
    </View>
  );
}