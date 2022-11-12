import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'mhhan';

  return (
    /**
     * if 조건문은 즉시실행함수 형태로 작성해야함.
     */
    /*
    <View style={styles.container}>
      <Text style={styles.text}>
        {(() => {
          if (name === 'Hanbit') return 'My name is Hanbit';
          else if (name === 'mhhan') return 'My name is mhhan';
          else return 'My name is React Native';
        })()}
      </Text>
      <StatusBar style="auto" />
    </View>
    */

    /**
     * 삼항 연산자
     */
    /*
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is {name === 'mhhan' ? 'Moonhee Han' : 'React Native'}
      </Text>
      <StatusBar style="auto" />
    </View>
    */

    /**
     * AND 연산자와 OR 연산자
     */
    
    <View style={styles.container}>
      {name === 'mhhan' && (
        <Text style={styles.text}>
          My name is Moonhee Han
        </Text>
      )}

      {name !== 'mhhan' && (
        <Text style={styles.text}>
          My name is not Moonhee Han
        </Text>
      )}

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
