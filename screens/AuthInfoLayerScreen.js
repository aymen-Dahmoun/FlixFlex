import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Button, Alert } from "react-native";
import useFetch from "../hooks/useFetch";
import { Card } from "react-native-paper";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "../firebaseClient";
import { useAuth } from "../context/AuthProvider";
import GenreList from "../comps/GenreList";

export default function AuthInfoLayerScreen({navigation, route}) {
  const { data: movieGenreList } = useFetch('genre/movie/list', { language: "en-US" });
  const { data: tvGenreList } = useFetch('genre/tv/list', { language: "en-US" });

  // Separate state for each genre type
  const [selectedMovieGenres, setSelectedMovieGenres] = useState([]);
  const [selectedTvGenres, setSelectedTvGenres] = useState([]);

  const { user } = useAuth();
  const db = getFirestore(firebaseApp);

  const saveGenresToFirestore = async () => {
    if (!user) {
      Alert.alert("Not logged in", "You must be logged in to save your genres.");
      return;
    }
    try {
      await setDoc(doc(db, "userGenres", user.uid), {
        movieGenres: selectedMovieGenres,
        tvGenres: selectedTvGenres,
        updatedAt: new Date().toISOString(),
      });
      Alert.alert("Success", "Your genres have been saved!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const toggleMovieGenre = (id) => {
    setSelectedMovieGenres((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };

  const toggleTvGenre = (id) => {
    setSelectedTvGenres((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };


return (
    <ScrollView>
      <Card style={{ padding: 16, marginBottom: 16 }}>
        <GenreList
          genres={movieGenreList.genres || []}
          selectedGenres={selectedMovieGenres}
          onToggle={toggleMovieGenre}
          title="Movie Genres"
        />
      </Card>
      <Card style={{ padding: 16 }}>
        <GenreList
          genres={tvGenreList.genres || []}
          selectedGenres={selectedTvGenres}
          onToggle={toggleTvGenre}
          title="TV Genres"
        />
      </Card>
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
        onPress={()=>NavigationActivation.navigate('Movies')}>
        <Text style={{
            fontSize: 20,
            fontWeight: '700',
            color: 'rgb(255, 115, 0)',}}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}