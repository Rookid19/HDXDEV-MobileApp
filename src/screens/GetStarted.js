import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import Details from "../../component/Details";
import UserProfile from "../../component/UserProfile";

const GetStarted = () => {
   return (
      <SafeAreaView style={styles.container}>
         <StatusBar style="auto" />
         <View style={styles.imageContainer}>
            <Image
               style={{ height: null, width: null, flex: 1 }}
               source={require("../images/crello.jpeg")}
            />
            <UserProfile />
         </View>

         <View style={styles.detailsContainer}>
            <Details />
         </View>
      </SafeAreaView>
   );
};

export default GetStarted;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   imageContainer: {
      flex: 0.7,
      marginTop: Platform.OS === "android" ? 35 : 0,
   },
   detailsContainer: {
      flex: 0.3,
      backgroundColor: "black",
   },
});
