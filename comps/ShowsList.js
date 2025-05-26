import { FlatList } from "react-native";
import { Text, Divider, ActivityIndicator } from "react-native-paper";

export default function ShowsList({ shows, loading, error, isHorizontal = true, Component }) {
    if (loading) {
        return <ActivityIndicator animating={true} size="small" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding:50 }} />;
    }
    
    if (error) {
        return <Text style={{alignSelf:'center'}}>Error: {error.message}</Text>;
    }
    
    return (
            <FlatList
            data={shows}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Component show={item} />}
            horizontal={isHorizontal}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            ItemSeparatorComponent={() => <Divider style={{ marginVertical: 10 }} />}
            />

    );
}