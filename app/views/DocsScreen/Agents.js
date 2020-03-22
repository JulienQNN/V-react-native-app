import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export function Agents() {
  const navigation = useNavigation();

  return (
    <View>
      <ListItem
        title="Limited supply! Its like digital gold!"
        //Can be useful for new Content

        subtitle={
          <View style={styles.subtitleView}>
            <Image
              source={require("../../assets/images/valorant.jpg")}
              style={styles.ratingImage}
            />
            <Text style={styles.ratingText}>J'aime le miel</Text>
          </View>
        }
        leftAvatar={{ source: require("../../assets/images/valorant.jpg") }}
        onPress={() => navigation.navigate(Julien)}
        title="Dismiss"
      />
    </View>
  );
}

export function Julien() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Premium!</Text>
    </View>
  );
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey"
  }
});