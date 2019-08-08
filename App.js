import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: "#4286f4"
  }
});

export default App;
