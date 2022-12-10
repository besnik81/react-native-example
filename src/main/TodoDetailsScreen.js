import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useRoute} from "@react-navigation/native";

function TodoDetailsScreen() {
  const {params} = useRoute();

  return <View style={styles.container}>
    <Text>{JSON.stringify(params, null, 2)}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoDetailsScreen;

