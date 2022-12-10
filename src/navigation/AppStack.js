import LoginScreen from "../auth/LoginScreen";
import MainStack from "./MainStack";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useUser} from "../context/user-context";

const Stack = createNativeStackNavigator();

function AppStack() {
  const {user} = useUser();
  return (<Stack.Navigator  screenOptions={{header: () => null}} >
    {user.isLoggedIn
      ? <Stack.Screen name="main" component={MainStack}/>
      : <Stack.Screen name="login" component={LoginScreen}/>
    }

  </Stack.Navigator>)
}

export default AppStack;
