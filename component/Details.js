import React from "react";
import {
   StyleSheet,
   Text,
   View,
   Animated,
   TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
   const data = {
      title: "Discover Models or Be",
      subTitle: "Discovered",
      description:
         "A platform that provides many kinds of the best and most trusted fashion",
   };

   return (
      <View>
         <Card
            containerStyle={styles.cardContainer}
            wrapperStyle={{
               transform: [{ rotate: "9deg" }],
            }}
         >
            <View>
               <Text style={styles.title}>{data.title}</Text>
               <Button
                  title={data.subTitle}
                  type="Solid"
                  buttonStyle={styles.button}
                  titleStyle={styles.buttonStyle}
               />
               <Text style={styles.description}>{data.description}</Text>
            </View>
            <TouchableOpacity style={styles.forwardButton}>
               <Ionicons
                  name="arrow-forward"
                  size={24}
                  color="white"
                  onPress={() => alert("This is a sort of animation view ")}
               />
            </TouchableOpacity>
            <View style={styles.indexContainer}>
               <Animated.View style={styles.AnimatedViewSmall} />
               <Animated.View style={styles.AnimatedViewSmall} />
               <Animated.View style={styles.AnimatedViewLong} />
            </View>
         </Card>
      </View>
   );
};

export default Details;

const styles = StyleSheet.create({
   cardContainer: {
      borderRadius: 20,
      marginTop: 40,
      transform: [{ rotate: "-10deg" }],
      backgroundColor: "#1A202C",
      borderColor: "#1A202C",
      marginTop: -80,
      marginLeft: -20,
      marginRight: -20,
   },
   button: {
      backgroundColor: "#24B6AD",
      padding: 10,
      width: 180,
      alignSelf: "center",
   },
   buttonStyle: {
      color: "white",
      fontSize: 20,
   },
   indexContainer: {
      padding: 15,
      //   width: "auto",
      flexDirection: "row",
      //   position: "absolute",
      //   marginTop: 320,
      alignSelf: "center",
      //   marginBottom: 0,
   },
   AnimatedViewSmall: {
      margin: 10,
      borderRadius: 100,
      height: 15,
      width: 15,
      backgroundColor: "white",
   },
   AnimatedViewLong: {
      margin: 10,
      borderRadius: 100,
      height: 15,
      width: 40,
      backgroundColor: "#ffba02",
   },
   forwardButton: {
      height: 70,
      width: 70,
      backgroundColor: "#FFBA02",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 50,
   },
   title: {
      fontSize: Platform.OS === "ios" ? 28 : 25,
      color: "#FFBA02",
      fontWeight: "bold",
      textAlign: "center",
      padding: 10,
   },
   description: {
      color: "white",
      padding: 10,
      fontSize: 18,
      textAlign: "center",
      width: "90%",
      alignSelf: "center",
   },
});
