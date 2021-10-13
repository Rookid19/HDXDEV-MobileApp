import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Asset } from "expo-asset";

import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

import GetStarted from "./src/screens/GetStarted";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
   const [loading, setLoading] = useState(false);

   const cacheAsync = async () => {
      const images = [
         require("./src/images/crello.jpeg"),
         require("./src/images/profile.jpg"),
      ];

      const cacheImages = images.map((image) => {
         return Asset.fromModule(image).downloadAsync();
      });
      return Promise.all(cacheImages);
   };

   const onload = async () => {
      cacheAsync().then(() => {
         setLoading(true);
         console.log("Assets loading finished");
      });
   };

   useEffect(() => {
      onload();
   }, []);

   if (loading) {
      return (
         <Provider store={store}>
            <GetStarted />
         </Provider>
      );
   } else {
      return (
         <View
            style={{
               alignItems: "center",
               justifyContent: "center",
               flex: 1,
            }}
         >
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
         </View>
      );
   }
}
