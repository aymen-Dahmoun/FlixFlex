
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native';
import ShowCard from '../comps/ShowCard';
import WideCard from '../comps/WideCard';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card, Divider } from 'react-native-paper';
import useGetShows from '../hooks/useGetShows';

export default function MoviesListScreen() {
  const {movies, loading, error} = useGetShows('movie');
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider 
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            flex: 1,}}>
    
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) :

      <View style={{ flex: 1, width: '100%' }}>
      <ScrollView>
      <Card>
        <Card.Title title="Movies" />
        <Card.Content>
          <Text>Trending</Text>
        </Card.Content>
      </Card>
        <FlatList 
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ShowCard movie={item} />
        }
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        ItemSeparatorComponent={() => <Divider style={{ marginVertical: 10 }} />}
        />
        <Card>
          <Card.Content>
            <Text>For you</Text>
          </Card.Content>
        </Card>
        <FlatList 
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ShowCard movie={item} />
        }
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        ItemSeparatorComponent={() => <Divider style={{ marginVertical: 10 }} />}
        />
      <Card>
        <Card.Content>
          <Text>Last 24 Hours</Text>  
        </Card.Content>
      </Card>
      <FlatList 
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <WideCard movie={item} />
        }
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        ItemSeparatorComponent={() => <Divider style={{ marginVertical: 10 }} />}
        />
      
      </ScrollView>
      </View>
      }
    </SafeAreaProvider>
  );

}