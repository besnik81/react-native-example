import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TodoListScreen from "../main/TodoListScreen";
import TodoDetailsScreen from "../main/TodoDetailsScreen";

const Stack = createNativeStackNavigator();


export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="todo-list" options={{title: "My To Do List"}} component={TodoListScreen}/>
      <Stack.Screen name="todo-details" options={{title: "Details"}} component={TodoDetailsScreen}/>
    </Stack.Navigator>
  );
}
