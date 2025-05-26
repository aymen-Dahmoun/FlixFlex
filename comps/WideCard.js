import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

export default function WideCard({ show }) {
    return(
        <View style={{ flex: 1, width: '100%' }}>
            <Card style={styles.Card}>
                <View style={styles.row}>
                    <Card.Cover
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${show.poster_path}` }} 
                        style={styles.Cover}
                    />
                    <View style={styles.info}>
                        <Card.Title
                            title={show.title}
                            subtitle={show.release_date}
                            titleNumberOfLines={1}
                            subtitleNumberOfLines={1}
                            titleStyle={styles.title}
                        />
                        <Card.Content>
                            <Text numberOfLines={1} ellipsizeMode="tail">rate: 5</Text>
                        </Card.Content>
                    </View>
                </View>
            </Card>
        </View>
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