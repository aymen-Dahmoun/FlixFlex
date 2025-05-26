import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

export default function MovieCard({ movie }) {
    return(
        <View >
            <Card style={styles.Card}
            mode="contained"
            >
                <Card.Cover
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} 
                    style={styles.Cover}
                />
                <Card.Title 
                    title={movie.title} 
                    subtitle={movie.release_date}
                    textNumberOfLines={1}
                    subtitleNumberOfLines={1}
                    overflow="hidden"
                    titleStyle={styles.title}
                 />
                <Card.Content>
                    <Text>rate: 5</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        margin: 5,
        width: 160,
        height: 300,
        alignItems: 'center',
        backgroundColor: '#fff',
        overflow: "hidden",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    Cover: {
        width: 140,      // Fixed width for image
        height: 210,     // Fixed height for image
        alignSelf: 'center',
        overflow: 'hidden',
    },
})