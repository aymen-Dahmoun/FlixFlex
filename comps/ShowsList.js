import { FlatList, View } from "react-native";
import { Text, Divider, ActivityIndicator } from "react-native-paper";

export default function ShowsList({ shows, loading, error, isHorizontal = true, Component, type }) {
    if (loading) {
        return <ActivityIndicator animating={true} size="small" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding:50 }} />;
    }
    
    if (error) {
        return <Text style={{alignSelf:'center'}}>Error: {error.message}</Text>;
    }
    console.log("ShowsList: ", type);
    
    return (
        <View>

            <FlatList
                data={shows}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Component show={item} type={type} />}
                horizontal={isHorizontal}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                legacyImplementation={false}
                scrollEnabled={isHorizontal}
                ItemSeparatorComponent={() => <Divider style={{ marginVertical: 10 }} />}
            />

        </View>
    );
}