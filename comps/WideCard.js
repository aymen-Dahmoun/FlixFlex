import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";
import {IconButton} from "react-native-paper";

export default function WideCard({ show, type }) {

    const navigation = useNavigation();
    const stars = Array.from({ length: Math.round(show.vote_average / 2) });
    return(
        <TouchableOpacity 
            style={{ flex: 1, width: '100%' }}
            onPress={() => navigation.navigate('Details', { showId: show.id, type: type })}>

            <Card mode='contained' style={styles.Card}>
                <View style={styles.row}>
                    <Card.Cover
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${show.poster_path}` }} 
                        style={styles.Cover}
                    />
                    <View style={styles.info}>
                        <Card.Title
                            title={show.original_name ?? show.title}
                            subtitle={show.release_date ?? show.first_air_date}
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
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Card: {
        margin: 5,
        width: "100%",
        height: 220,
        backgroundColor: '#fff',
        overflow: "hidden",
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    info: {
        flex: 1,
        paddingLeft: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    Cover: {
        width: 140,
        height: 210,
        alignSelf: 'center',
        borderRadius: 8,
    },
})