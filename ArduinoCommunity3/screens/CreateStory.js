import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: "arduino",
      dropdownHeight: 40,
      title:'',
      author:'',
      story:'',
      moral:'',
      description:''
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        arduino:require("../assets/arduino.jpg"),
        servo: require("../assets/servo.jpg"),
        ultrasonicSensor: require("../assets/ultrasonicSensor.jpg"),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Posts</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}
              ></Image>
              <View style={{alignSelf:'center'}}>
              <DropDownPicker
               items={[
                 {label:"Arduino" ,value:'arduino'},
                 {label:"Servo motor" ,value:'servo'},
                 {label:"Ultrasonic sensor" ,value:'ultrasonicSensor'},
               ]}
               defaultValue={this.state.previewImage}
               containerStyle={{width:RFValue(275),borderRadius:75,height:RFValue(60)}}
               dropDownStyle={{backgroundColor:'#2f305d'}}
               style={{backgroundColor:'#2f345d'}}
               labelStyle={{color:'white',fontFamily:'Bubblegum-Sans'}}
               onChangeItem={(item)=>{
                 this.setState({previewImage:item.value})
               }}
               arrowColor='white'
               arrowSize={30}
              />  
              <TextInput
               placeholder="Enter Name of your project"
               placeholderTextColor='white'
               style={{
                 fontFamily:"Bubblegum-Sans",
                 color:'white',
                 width:RFValue(275),
                 height:RFValue(35),
                 margin:RFValue(7.5),
                 backgroundColor:'#2f345d',
                 borderRadius:20,
                 alignSelf:'center'
               }}
               onChangeText={(text)=>{
                 this.setState({title:text})
               }}
              /> 
              <TextInput
               placeholder="Enter Creator"
               placeholderTextColor='white'
               style={{
                 fontFamily:"Bubblegum-Sans",
                 color:'white',
                 width:RFValue(275),
                 height:RFValue(35),
                 margin:RFValue(7.5),
                 backgroundColor:'#2f345d',
                 borderRadius:20,
                 alignSelf:'center'
               }}
               onChangeText={(text)=>{
                 this.setState({author:text})
               }}
              /> 
              <TextInput
               placeholder="Enter Desciption"
               placeholderTextColor='white'
               style={{
                 fontFamily:"Bubblegum-Sans",
                 color:'white',
                 width:RFValue(275),
                 height:RFValue(35),
                 margin:RFValue(7.5),
                 backgroundColor:'#2f345d',
                 borderRadius:20,
                 alignSelf:'center',
                 padding:RFValue(5)
               }}
               onChangeText={(text)=>{
                 this.setState({description:text})
               }}
               multiline={true}
              />
              <TextInput
               placeholder="Enter Story of how you made the project"
               placeholderTextColor='white'
               style={{
                 fontFamily:"Bubblegum-Sans",
                 color:'white',
                 width:RFValue(275),
                 height:RFValue(35),
                 margin:RFValue(7.5),
                 backgroundColor:'#2f345d',
                 borderRadius:20,
                 alignSelf:'center',
                 padding:RFValue(5)
               }}
               onChangeText={(text)=>{
                 this.setState({story:text})
               }}
               multiline={true}
              />
              <TextInput
               placeholder="Enter Tags eg. #sonar etc."
               placeholderTextColor='white'
               style={{
                 fontFamily:"Bubblegum-Sans",
                 color:'white',
                 width:RFValue(275),
                 height:RFValue(35),
                 margin:RFValue(7.5),
                 backgroundColor:'#2f345d',
                 borderRadius:20,
                 alignSelf:'center',
                 padding:RFValue(5)
               }}
               onChangeText={(text)=>{
                 this.setState({moral:text})
               }}
               multiline={true}
              />
              </View>           
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  }
});
