import React from 'react';
import { View } from 'react-native';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';

const App = () => {
  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        {/* <Text style={{ fontSize: 30, marginBottom: 10 }}>Props</Text>
        <MyButton title="Button" onPress={() => alert('props')} />
        <MyButton title="Button2" onPress={() => alert('children')}>Children Props</MyButton>
        <MyButton onPress={() => alert('default')} /> */}

        <EventButton />
        <EventInput />
    </View>
  );
};

export default App;