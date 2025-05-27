import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Card, PaperProvider, Portal, Modal, Button } from 'react-native-paper';
import WebView from 'react-native-webview';
import useFetch from '../hooks/useFetch';

export default function DetailsScreen({ navigation, route }) {
  const { showId, type } = route.params;
  const { width, height } = Dimensions.get('window');
  const [isWatching, setIsWatching] = useState(false);

  const { data, loading, error } = useFetch(`${type}/${showId}`);
  const { data: videos, loading: loadingVideos, error: errorVideos } = useFetch(`${type}/${showId}/videos`);

  if (loading || loadingVideos || !data || !videos) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const trailer = videos.find(
    (video) =>
      video.type === 'Trailer' &&
      video.official === true &&
      video.site === 'YouTube'
  );

  return (
    <PaperProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Card>
          <Card.Cover
            source={{ uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` }}
            style={{
              width: width,
              height: height * 0.29,
              alignSelf: 'center',
              borderRadius: 8,
            }}
            resizeMode="cover"
          />
          <Card.Title
            title={data.title || data.name}
            subtitle={data.release_date || data.first_air_date}
            titleNumberOfLines={1}
            subtitleNumberOfLines={1}
            titleStyle={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}
          />
          <Card.Content>
            <Text style={{ fontSize: 16, color: '#333', marginVertical: 10 }}>
              {data.overview}
            </Text>
            <Text style={{ fontSize: 16, color: '#555' }}>
              Rating: {data.vote_average}/10
            </Text>
          </Card.Content>

          {trailer && (
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: 'rgb(255, 115, 0)',
                borderRadius: 5,
                alignSelf: 'center',
                marginBottom: 10,
              }}
              onPress={() => setIsWatching(true)}
            >
              <Text style={{ color: '#fff', fontSize: 18 }}>Watch Now</Text>
            </TouchableOpacity>
          )}
        </Card>

        <Portal>
          <Modal
            visible={isWatching}
            onDismiss={() => setIsWatching(false)}
            contentContainerStyle={{
              backgroundColor: 'white',
              padding: 0,
              borderRadius: 10,
              width: width * 0.9,
              height: height * 0.35,
              alignSelf: 'center',
              overflow: 'hidden',
            }}
          >
            <WebView
              source={{ uri: `https://www.youtube.com/embed/${trailer?.key}` }}
              style={{ flex: 1 }}
              javaScriptEnabled
              allowsFullscreenVideo
            />
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
}
