import React from 'react';
import { StyleSheet, Alert, Text, View, Button, SafeAreaView, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  console.log("app executed");
  const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello react native...!  hiii aaa
            </Text>
      <TouchableWithoutFeedback >
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 208,

            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />

      </TouchableWithoutFeedback>

      <Button
        color="orange"
        title="click here"
        onPress={() => console.log("oops, button was pressed")}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
