
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ShowCard from '../comps/ShowCard';
import WideCard from '../comps/WideCard';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import useFetch from '../hooks/useFetch';
import ShowsList from '../comps/ShowsList';

export default function MoviesListScreen() {

  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
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
            flex: 1,}}>

      <View style={{ width: '100%', flex: 1, justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <ScrollView >
          <Text style={{fontSize: 28, fontWeight: '700', margin: 10}}>Movies</Text>
          {loadingTrending && <Text style={{fontSize: 24, fontWeight: '700'}}>Trending</Text>}
          <ShowsList shows={trending} loading={loadingTrending} error={errorTrending} Component={ShowCard}/>
          {loadingUpcomings && <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>Up Coming</Text>}
          <ShowsList shows={upcomings} loading={loadingUpcomings} error={errorUpcomings} Component={ShowCard}/>
          {loadingMovies && <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>Popular</Text>}
          <ShowsList shows={moviesList} loading={loadingMovies} error={errorMovies} isHorizontal={false} Component={WideCard} />
          <TouchableOpacity style={{ height: 100 }} onPress={()=>setPage(prev => prev + 1)} >
            <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );

}