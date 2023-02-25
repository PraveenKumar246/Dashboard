import {StyleSheet,Text,View ,Alert,Image,TouchableOpacity} from 'react-native';
import React, {useEffect,useState,useRef} from 'react';

import PhoneInput from 'react-native-phone-number-input';
import Icon from "react-native-vector-icons/Fontisto";

const Home = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState('');
 
  const phoneInput = useRef(null);
 
  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };

  
  return (
    <View style={{backgroundColor: '#d9effc'}}>
    <View>
          <Image source={require('../images/Loginorsignup.png')}/>
          
    </View>

    <View style={{flexDirection:'column', gap: -50 }}>
      <Text style={styles.Lets}>Let's get started</Text>
      <Text style={styles.hello}>Hello, Welcome back to our account</Text>
    </View>
    
    <View style={{flexDirection:'column', gap: -40,marginTop: -30 }}>
    <PhoneInput ref={phoneInput}
        defaultValue={phoneNumber}
        placeholder="Mobile Number"
        defaultCode="IN"
        layout="first"
        withShadow
     //   autoFocus
        containerStyle={styles.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0,backgroundColor: '#d9effc' }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />
 
      <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Request OTP</Text>
      </TouchableOpacity >

      <Text style={styles.or}>OR</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',margin: 30}}>
          <Text><Icon name="google" size={30} color="#900" /></Text>
          <Text><Icon name="facebook" size={30} color="white" backgroundColor= 'skyblue' height="44" width="44"/></Text>
          <Text><Icon name="apple" size={30}  /></Text>
      </View>
      </View>
    </View>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Lets: {
    margin: 30,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  hello: {
    margin: 30,
   
  },
  phoneNumberView: {
    width:'auto',
    height: 50,
    margin: 30,
    backgroundColor: '#d9effc',
    borderRadius: 20,
    borderColor: "skyblue",
  },
 
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    
    padding: 8,
    borderRadius: 20,
    borderColor: "skyblue", 
    borderWidth: 2,

    
  },
 
  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: 'skyblue',
    fontWeight:'bold',
    
  },
  or:{
    margin:30,
    textAlign: 'center',
    color:'skyblue',
    fontWeight: 'bold',
  }
});