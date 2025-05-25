
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import useGetMovies from '../hooks/useGetMovies';

export default function MoviesListScreen() {
  const {movies, loading, error} = useGetMovies();
  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        movies.map(movie => (
          <Text key={movie.id}>{movie.title}</Text>
        ))
      )}
    </View>
  );

}