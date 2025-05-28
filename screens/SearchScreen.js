import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView } from "react-native";
import useFetch from "../hooks/useFetch";
import ShowsList from "../comps/ShowsList";
import WideCard from "../comps/WideCard";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [searchPath, setSearchPath] = useState(null);

  // Only fetch when searchPath is set (user pressed search)
  const { data, loading, error } = useFetch(
    searchPath ? "search/multi" : null,
    searchPath ? { query: searchPath } : {}
  );

  const handleSearch = () => {
    if (query.trim()) {
      setSearchPath(query.trim());
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Search movies, TV shows, people..."
        value={query}
        onChangeText={setQuery}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
          marginBottom: 10,
        }}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
      />
      <Button title="Search" onPress={handleSearch} color="orange" />

      {loading && <Text style={{ marginTop: 20 }}>Loading...</Text>}
      {error && <Text style={{ color: "red", marginTop: 20 }}>{error.message}</Text>}

      {data && data.length > 0 && (
        <ScrollView style={{ marginTop: 20 }}>
          <ShowsList
            shows={data}
            loading={loading}
            error={error}
            isHorizontal={false}
            Component={WideCard}
            type="movie"
          />
        </ScrollView>
      )}
      {data && data.length === 0 && searchPath && !loading && (
        <Text style={{ marginTop: 20 }}>No results found.</Text>
      )}
    </View>
  );
}