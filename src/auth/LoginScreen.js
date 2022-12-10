import {View, Text, SafeAreaView, Button} from "react-native";
import {useUser} from "../context/user-context";

function LoginScreen() {
  const {login} = useUser();
  return (<SafeAreaView style={{flex: 1, backgroundColor: "yellow"}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Login</Text>
            <Button title="Login" onPress={login} />
          </View>
  </SafeAreaView>);
}

export default LoginScreen;
