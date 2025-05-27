
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ShowCard from '../comps/ShowCard';
import WideCard from '../comps/WideCard';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import useFetch from '../hooks/useFetch';
import ShowsList from '../comps/ShowsList';
import { Divider } from 'react-native-paper';

export default function MoviesListScreen() {

  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const {data: movies, loading: loadingMovies, error: errorMovies} = useFetch('discover/movie', {
    include_adult: false,
    include_video: true,
    language: "en-US",
    sort_by: "popularity.desc",
    page: page,
  });
  const {data: trending, loading: loadingTrending, error: errorTrending} = useFetch('discover/movie', {
    include_adult: false,
    include_video: true,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  });
  const {data: upcomings, loading: loadingUpcomings,
    error: errorUpcomings} = useFetch('movie/upcoming');
    const insets = useSafeAreaInsets();
    
  useEffect(() => {
    if (movies?.length > 0) {
      setMoviesList(prev => {
      const fullData = [...prev, ...movies];
      const filteredData = Array.from(new Map(fullData.map(m => [m.id, m])).values());
      return filteredData;
    });
    }
  }, [movies]);

  return (
    <SafeAreaProvider
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
            }}>

      <View style={{ width: '100%', flex: 1, justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <ScrollView >
          <Text style={{fontSize: 28, fontWeight: '700', margin: 10}}>Movies</Text>
          <Divider style={{...styles.divider, width: '100%'}} bold={true} />
          {!loadingTrending && <Text style={{fontSize: 24, fontWeight: '700'}}>Trending</Text>}
          <Divider style={styles.divider} bold={false} />
          <ShowsList shows={trending} loading={loadingTrending} error={errorTrending} Component={ShowCard} type={'movie'}/>
          {!loadingUpcomings && <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>Up Coming</Text>}
          <Divider style={styles.divider} bold={false} />
          <ShowsList shows={upcomings} loading={loadingUpcomings} error={errorUpcomings} Component={ShowCard} type={'movie'}/>
          <Divider style={styles.divider} bold={false} />
          {!loadingMovies && <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>Discover</Text>}
          <Divider style={styles.divider} bold={false} />
          <ShowsList shows={moviesList} loading={loadingMovies} error={errorMovies} isHorizontal={false} Component={WideCard} type={'movie'} />
          <TouchableOpacity style={{ height: 50, width: 180, alignSelf:'center', borderWidth:1, borderBlockColor: 'rgb(255, 115, 0)', borderRadius:40, flex:1, alignItems:'center', justifyContent:'center' }} onPress={()=>setPage(prev => prev + 1)} >
            <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({
    divider: { marginVertical: 10,
      width: '90%',
      backgroundColor:'rgb(255, 123, 0)',
      alignSelf: 'center',
    }
  }
)
