import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import MiPrimerComponente from './src/components/miPrimerComponente/miPrimerComponente';
import MiPrimerComponenteClass from './src/components/miPrimerComponente/miPrimerComponenteClass';
import { Profile } from './src/screens/profile';
import { getApiInfo } from './src/api/RickAndMortyApi';
import { ApiInfoResponse } from './src/api/entities/ApiInfoResponse';
import { getCharacters } from './src/api/RickAndMortyApiAlt';
import { Characters } from './src/screens/Characters';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Character } from './src/api/entities/CharactersResponse';

export type CharactersStackParamList = {
  Characters: undefined;
  Profile: {character: Character};
}

function App(): JSX.Element {
  
  const Stack = createNativeStackNavigator<CharactersStackParamList>();

  //  //Use FETCH
  // React.useEffect(() => {
  //   getApiInfo() // Call method FETCH
  //     .then(response => response.json())
  //     .then((data: ApiInfoResponse) => {
  //       console.log(`ApiInfo: ${JSON.stringify(data)}`);
  //     })
  //     .catch(error => {
  //       // Error Handling
  //       console.error(error);
  //     })
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Characters'>
        <Stack.Screen name='Characters' component={Characters} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
