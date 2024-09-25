import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import PokimentCard from "./../../components/PokimentCard";

export default function index() {
  const charmanderDate = {
    name: "charmander",
    image: require("../../assets/images/charmander.jpg"),///////////////////////////
    type: "fire",
    hp: 39,
    moves: ["scratch", "ember", "Growl", "Leer"],
    weaknesses: ["water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("../../assets/images/squirtle.jpg"), 
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../../assets/images/bulbasaur.jpg"), /////////////////////////////////
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("../../assets/images/pikachu.jpg"), ////////////////////////////////////
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokimentCard {...charmanderDate} />
        <PokimentCard {...squirtleData} />
        <PokimentCard {...bulbasaurData} />
        <PokimentCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb3ff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
