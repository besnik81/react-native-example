import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useUser} from "../context/user-context";
import {useNavigation} from "@react-navigation/native";

const todos = [
  {
    "id": 12,
    "user_id": "1",
    "text": "asdasdsadasd skjadhjh sadkjhsd kjsahd ksjhad skjdh askdjh sadkjhdsa NEW LINE",
    "done": false,
    "created_at": "2022-11-12T10:40:12.000000Z",
    "updated_at": "2022-11-12T10:40:12.000000Z"
  },
  {
    "id": 11,
    "user_id": "1",
    "text": "jkhkjhsd kjhkjhj sadfsdf sfesdf",
    "done": false,
    "created_at": "2022-10-29T10:57:36.000000Z",
    "updated_at": "2022-10-29T10:57:36.000000Z"
  },
  {
    "id": 10,
    "user_id": "1",
    "text": "jkhkjhsd kjhkjhj sadfsdf",
    "done": false,
    "created_at": "2022-10-29T10:57:08.000000Z",
    "updated_at": "2022-10-29T10:57:08.000000Z"
  },
  {
    "id": 9,
    "user_id": "1",
    "text": "jkhkjhsd kjhkjhj",
    "done": false,
    "created_at": "2022-10-29T10:56:12.000000Z",
    "updated_at": "2022-10-29T10:56:12.000000Z"
  },
  {
    "id": 8,
    "user_id": "1",
    "text": "jkhkjhsd",
    "done": false,
    "created_at": "2022-10-29T10:56:05.000000Z",
    "updated_at": "2022-10-29T10:56:05.000000Z"
  },
  {
    "id": 5,
    "user_id": "1",
    "text": "test todo",
    "done": false,
    "created_at": "2020-12-26T16:25:30.000000Z",
    "updated_at": "2020-12-26T16:25:34.000000Z"
  },
  {
    "id": 4,
    "user_id": "1",
    "text": "kljlkadsj",
    "done": true,
    "created_at": "2020-12-26T16:19:25.000000Z",
    "updated_at": "2020-12-26T16:25:33.000000Z"
  },
  {
    "id": 2,
    "user_id": "1",
    "text": "sadfgdsb sa;dk",
    "done": true,
    "created_at": "2020-12-19T21:43:47.000000Z",
    "updated_at": "2020-12-26T16:23:39.000000Z"
  },
  {
    "id": 1,
    "user_id": "1",
    "text": "sadfgdsb",
    "done": false,
    "created_at": "2020-12-19T21:43:38.000000Z",
    "updated_at": "2020-12-19T21:43:38.000000Z"
  }
];

function TodoListScreen() {
  const {logout} = useUser();
  const {navigate} = useNavigation();

  const goToDetails = item => {
    navigate('todo-details', {item});
  }

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Text style={{fontSize: 24, marginVertical: 10}} onPress={logout}>Press here to logout</Text>
    <FlatList
      style={{paddingHorizontal: 12}}
      data={todos}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => goToDetails(item)}>
        <View style={{paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: 'blue'}}>
          <Text>{item.text}</Text>
        </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default TodoListScreen;

