import React, { useState } from "react";
import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   Image,
   TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectfollowCounter } from "../redux/counter";
import { increseFollow, decreseFollow } from "../redux/counter";

// import

const UserProfile = () => {
   const [follow1, setFollow1] = useState(false);
   //UseSelector is used select a state in the data layer
   const follow = useSelector(selectfollowCounter);

   // useDispatch is used to call the selected state in the data layer
   const dispatch = useDispatch();

   // Since selectfollowCounter is selected, whenever  decrease function is called
   //the dispatch method calls selecfollowerCounter and perform a certain task based on
   // the action in the state.
   const decrease = () => {
      dispatch(decreseFollow());
      setFollow1(false);
   };

   const increase = () => {
      dispatch(increseFollow());
      setFollow1(true);
   };

   const data = {
      name: "Lois Adjeey Annan",
      profileImage: require("../src/images/profile.jpg"),
      projects: "137",
      followers: follow,
   };

   return (
      <View style={styles.container}>
         <TouchableOpacity>
            <Ionicons name="chevron-back" size={34} color="white" />
         </TouchableOpacity>

         <View style={styles.imageContainer}>
            <Image
               style={{ height: null, width: null, flex: 1 }}
               source={data.profileImage}
            />
         </View>
         <Text style={styles.name}>{data.name}</Text>

         <View style={styles.infoConatainer}>
            <View style={styles.box}>
               <Text style={styles.count}>{data.projects}</Text>
               <Text style={styles.countTitle}>Projects</Text>
            </View>

            <View style={styles.box}>
               <Text style={styles.count}>{data.followers}</Text>
               <Text style={styles.countTitle}>Followers</Text>
            </View>
            <View
               style={[
                  styles.box,
                  { borderRightColor: "gray", borderRightWidth: 0 },
               ]}
            >
               {follow1 ? (
                  <TouchableOpacity
                     style={[styles.followButton, { backgroundColor: "red" }]}
                     onPress={decrease}
                  >
                     <Text style={styles.follow}>Unfollow</Text>
                  </TouchableOpacity>
               ) : (
                  <TouchableOpacity
                     onPress={increase}
                     style={styles.followButton}
                  >
                     <Text style={styles.follow}>Follow</Text>
                  </TouchableOpacity>
               )}
            </View>
         </View>
      </View>
   );
};
export default UserProfile;

const styles = StyleSheet.create({
   countTitle: {
      color: "white",
      fontWeight: "bold",
   },
   count: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
   },
   follow: {
      color: "#fff",
      fontWeight: "bold",
   },
   followButton: {
      backgroundColor: "#ffba02",
      padding: 10,
      width: "100%",
      borderRadius: 100,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
   },
   name: {
      fontSize: 20,
      fontWeight: "bold",
      alignSelf: "center",
      padding: 20,
      color: "white",
   },
   box: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      padding: 10,
      borderRightColor: "gray",
      borderRightWidth: 1,
   },
   infoConatainer: {
      flex: 1,
      padding: 10,
      flexDirection: "row",
   },
   imageContainer: {
      height: 120,
      width: 120,
      alignSelf: "center",
      borderRadius: 100,
      overflow: "hidden",

      borderWidth: 3,

      borderColor: "#fff",
   },
   container: {
      flex: 0.4,
      position: "absolute",
      width: width,
      marginTop: height / 50,
      padding: 20,
   },
});
