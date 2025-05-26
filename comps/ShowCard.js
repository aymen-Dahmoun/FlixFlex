import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

export default function MovieCard({ show }) {
    const stars = Array.from({ length: Math.round(show.vote_average / 2) });

    return (
        <TouchableOpacity>
            <Card style={styles.Card} mode='contained'>
                <Card.Cover
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${show.poster_path}` }}
                    style={styles.Cover}
                />
                <Card.Title
                    title={show.title}
                    subtitle={show.release_date}
                    titleNumberOfLines={1}
                    subtitleNumberOfLines={1}
                    titleStyle={styles.title}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 10 }}>
                    {stars.map((_, i) => (
                        <IconButton
                            key={i}
                            icon="star"
                            size={15}
                            iconColor="#FFD700"
                            style={{ padding: 0, margin: 0, width: 15, height: 15 }}
                        />
                    ))}
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Card: {
        margin: 5,
        borderWidth: 0.5,
        borderRadius: 6,
        borderColor: '#ccc',
        width: 160,
        alignItems: 'center',
        backgroundColor: '#fff',
        overflow: "hidden",
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    Cover: {
        width: 160,
        height: 210,
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 6,
    },
})