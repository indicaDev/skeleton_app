

import {
  SafeAreaView,
} from 'react-native';

import { ContactsList } from "./src/screens/ContactsList";


import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex: 1, marginVertical: 10}} >
      <ContactsList />
    </SafeAreaView>
  );
}


export default App;
