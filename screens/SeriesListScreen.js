
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import ShowCard from '../comps/ShowCard';
import WideCard from '../comps/WideCard';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import useFetch from '../hooks/useFetch';
import ShowsList from '../comps/ShowsList';

export default function SeriesListScreen() {

  const [seriesList, setSeriessList] = useState([]);
  const [page, setPage] = useState(1);
  const {data: series, loading: loadingSeries, error: errorSeries} = useFetch('discover/tv', {
    include_adult: false,
    include_video: true,
    language: "en-US",
    sort_by: "popularity.desc",
    page: page,
  });
  const {data: trending, loading: loadingTrending, error: errorTrending} = useFetch('tv/top_rated', {
    include_adult: false,
    include_video: true,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  });
  const {data: upcomings, loading: loadingUpcomings,
    error: errorUpcomings} = useFetch('tv/on_the_air');
    
  useEffect(() => {
    if (series?.length > 0) {
      console.log("attributes: ", Object.keys(series[0]));
      setSeriessList(prev => {
      const fullData = [...prev, ...series];
      const filteredData = Array.from(new Map(fullData.map(m => [m.id, m])).values());
      return filteredData;
    });
    }
  }, [series]);

  return (
    <SafeAreaProvider
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flex: 1,}}>

      <View style={{ width: '100%', flex: 1, justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
          <Text style={{fontSize: 28, fontWeight: '700', margin: 10}}>Series</Text>
          {!loadingTrending && <Text style={{fontSize: 24, fontWeight: '700'}}>Top Rated</Text>}
          <ShowsList shows={trending} loading={loadingTrending} error={errorTrending} Component={ShowCard} type={'tv'}/>
          {!loadingUpcomings && <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>On Air, Next Week</Text>}
          <ShowsList shows={upcomings} loading={loadingUpcomings} error={errorUpcomings} Component={ShowCard} type={'tv'} />
          {!loadingSeries && <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>Popular</Text>}
          <ShowsList shows={seriesList} loading={loadingSeries} error={errorSeries} isHorizontal={false} Component={WideCard} type={'tv'} />
          <TouchableOpacity style={{ height: 100 }} onPress={()=>setPage(prev => prev + 1)} >
            <Text style={{fontSize: 24, fontWeight: '700', margin: 10}}>More</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );

}