import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/Login"}>Go Login</Link>
    </View>
  );
};

export default Home;
