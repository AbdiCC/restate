import { Text, View } from "react-native";
import React from 'react'
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-lg font-bold my-10">Selamat Datang</Text>
      <Link href='/sign-in'>Sign In</Link>
      <Link href='/explore'>Explore</Link>
      <Link href='/properties/1'>Property</Link>
    </View>
  );
}
