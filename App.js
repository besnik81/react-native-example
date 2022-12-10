import {NavigationContainer} from "@react-navigation/native";
import {UserProvider} from "./src/context/user-context";
import AppStack from "./src/navigation/AppStack";

export default function App() {

  return (
    <NavigationContainer>
      <UserProvider>
        <AppStack />
      </UserProvider>
    </NavigationContainer>
  );
}
