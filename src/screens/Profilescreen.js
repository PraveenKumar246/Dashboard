/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Keyboard,
  ImageBackground
  
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import imageavatar from "../images/user_boy.png"
import Icon from 'react-native-vector-icons/Fontisto';
import {TextInput, RadioButton, Checkbox} from 'react-native-paper';
import PhoneInput from 'react-native-phone-number-input';
// import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import ModalPicker from './ModalPicker';
import MonthModalPicker from './MonthModalPicker';
import YearModalPicker from './YearModalPicker';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';


const Profilescreen = ({navigation}) => {
  
  const [text, setText] = React.useState('');

 // const [imageUri,setImageUri] = useState(imageavatar);

  const [phoneNumber, setPhoneNumber] = useState('');

  const phoneInput = useRef(null);

  const [value, setValue] = useState('first');

  const [checked1, setChecked1] = useState(false);

  const [chooseDay,setChooseDay] = useState('Day');

  const [chooseMonth,setChooseMonth] = useState('Month');

  const [chooseYear,setChooseYear] = useState('Year');

  const [isModalVisible,setisModalVisible] = useState('');

  const [isModalVisible1,setisModalVisible1] = useState('');

  const [isModalVisible2,setisModalVisible2] = useState('');

  const [image, setImage] = useState('https://i.ibb.co/L58D9bH/user-boy.png');

  const changeModalVisibility = (bool) =>{
    setisModalVisible(bool)
  }

  const changeModalVisibility1 = (bool) =>{
    setisModalVisible1(bool)
  }

  const changeModalVisibility2 = (bool) =>{
    setisModalVisible2(bool)
  }

  const setDay = (option) => {
    setChooseDay(option);
  }

  const setMonth = (option) => {
    setChooseMonth(option);
  }

  const setYear = (option) => {
    setChooseYear(option);
  }
/*
 const openCamera = () => {
  let options = {
    storageOption : {
      path: 'images',
      mediaType: 'photo',
    },
    includesbase64: true,
  };
  launchCamera(options,response =>{
    console.log("Response=" , response);
    if(response.didCancel){
      console.log("user cancelled image picker");
    }
    else if(response.error){
      console.log("Image picker Error", response.error);
    }
    else if(response.customButton){
      console.log("user tapped custom Button",response.customButton);
    }
    else{
      const source = {uri:response.assets[0].uri};
      setImageUri(source);
    }
  });
 }

 const openGallery = () => {
  let options = {
    storageOption : {
      path: 'images',
      mediaType: 'photo',
    },
    includesbase64: true,
  };
  launchImageLibrary(options,response =>{
    console.log("Response=" , response);
    if(response.didCancel){
      console.log("user cancelled image picker");
    }
    else if(response.error){
      console.log("Image picker Error", response.error);
    }
    else if(response.customButton){
      console.log("user tapped custom Button",response.customButton);
    }
    else{
      const source = {uri:response.assets[0].uri};
      setImageUri(source);
    }
  });
 }
*/

 renderInner = () => (
  <View style={styles.panel}>
    <View style={{alignItems: 'center'}}>
      <Text style={styles.panelTitle}>Upload Photo</Text>
      <Text style={styles.panelSubtitle}>Choose Your Profile</Text>
    </View>
    <TouchableOpacity style={styles.panelButton} onPress={()=> {takePhotoFromCamera()}}>
      <Text style={styles.panelButtonTitle}>Take a Photo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.panelButton} onPress={()=> {choosePhotoFromLibrary()}}>
      <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.panelButton}
      onPress={() => this.bs.current.snapTo(1)}>
      <Text style={styles.panelButtonTitle}>Cancel</Text>
    </TouchableOpacity>
  </View>
);

 renderHeader = () => (
  <View style={styles.header}>
    <View style={styles.panelHeader}>
      <TouchableOpacity onPress={() => this.bs.current.snapTo(1)}>
         <View ><Icon style={{margin:6}}
            name="close"
            size={20}
            onPress={() => this.bs.current.snapTo(1)}
          /></View>
      </TouchableOpacity>
    </View>
  </View>
);

const takePhotoFromCamera = () => {
  ImagePicker.openCamera({
    compressImageMaxWidth: 300,
    compressImageMaxHeight: 300,
    cropping: true,
    compressImageQuality: 0.7
  }).then(image => {
    console.log(image);
    setImage(image.path);
    this.bs.current.snapTo(1);
  });
}

const choosePhotoFromLibrary = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 300,
    cropping: true,
    compressImageQuality: 0.7,
  }).then(image => {
    console.log(image);
    setImage(image.path);
    this.bs.current.snapTo(1);
  });
}

bs = React.createRef();
fall = new Animated.Value(1);
 
 
  return (
    
    <View style={{backgroundColor:'#d9effc'}}> 
    
    <ScrollView>
     
      <View style={{flexDirection: 'row', margin: 20}}>

      
        <Text>
          <Icon
            name="angle-left"
            size={20}
            onPress={() => navigation.navigate('Home')}
          />
        </Text>

        <Text style={{marginHorizontal: 90, fontWeight: 'bold'}}>
          User Details
        </Text>
      </View>

      
      <View style={styles.imgContainer}>

     
 <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
        <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 45}}
                />
        
       
          
        </TouchableOpacity>
        
        <TouchableOpacity style={{alignItems: 'center', top: -40, left: 45}} onPress={() => this.bs.current.snapTo(0)}>
           <FontAwesome5 name="camera" size={20} color="green"/>
        </TouchableOpacity>
        <Text>Praveen Kumar</Text>
      </View>
          

      <View>
        <TextInput
          label="Email Address"
          value={text}
          mode="outlined"
          size={20}
          onChangeText={text => setText(text)}
          keyboardType="email-address"
          style={{margin: 10, backgroundColor: '#d9effc'}}
          activeUnderlineColor="grey"
        />

        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          placeholder="XXXXX XXXXX"
          defaultCode="IN"
      //    mode="outlined"
        
          layout="first"
          withShadow
        //  autoFocus
          label="Mobile Number"

          containerStyle={styles.phoneNumberView}
          textContainerStyle={{paddingVertical: 0,backgroundColor: '#d9effc'}}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />

        <Text style={{margin: 10}}>Gender</Text>

        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton value="first" />
              <Text style={{margin: 7, fontWeight: 'bold'}}>Male</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 25}}>
              <RadioButton value="second" />
              <Text style={{margin: 7, fontWeight: 'bold'}}>Female</Text>
            </View>
          </View>
        </RadioButton.Group>

        <Text style={{margin: 10}}>Date of Birth</Text>
<View
          style={{
            flexDirection: 'row',
            flex:1,
            margin: 6,
            justifyContent: 'space-around',
          }}>

            <View>
            <TouchableOpacity onPress={()=>changeModalVisibility(true)} style={{flexDirection:'row'}}>        
                 <Text> {chooseDay}</Text>
                 
                  <Icon style={{margin:6}}
                        name="angle-down"
                        size={12}
                        onPress={()=>changeModalVisibility(true)} 
                      />
                 <Modal
                      animationType="fade"
                      transparent={true}
                      visible={isModalVisible}
                      onRequestClose={()=>changeModalVisibility(false)}
                      >
           
                    
            <ModalPicker changeModalVisibility = {changeModalVisibility} setDay = {setDay}/>
        </Modal>
        
</TouchableOpacity>
</View>
 
 <View>
<TouchableOpacity onPress={()=> changeModalVisibility1(true)} style={{flexDirection:'row'}}> 
          <Text> {chooseMonth} </Text>

          <Icon style={{margin:6}}
            name="angle-down"
            size={12}
            onPress={()=>changeModalVisibility(true)} 
          />

          <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={()=>changeModalVisibility1(false)}
        >
           
                    
            <MonthModalPicker changeModalVisibility1 = {changeModalVisibility1} setMonth = {setMonth}/>
        </Modal>
</TouchableOpacity>
</View>


    <View>
       <TouchableOpacity onPress={()=> changeModalVisibility2(true)} style={{flexDirection:'row'}}> 
          <Text> {chooseYear} </Text>

          <Icon style={{margin:6}}
            name="angle-down"
            size={12}
            onPress={()=>changeModalVisibility(true)} 
          />

          <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={()=>changeModalVisibility2(false)}
        >


            <YearModalPicker changeModalVisibility2 = {changeModalVisibility2} setYear = {setYear}/>
        </Modal>
         </TouchableOpacity>

      </View> 
        
</View>


        <View style={{flexDirection: 'row', margin: 4}}>
          <Checkbox
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked1(!checked1);
            }}
          />
          <TouchableOpacity>
            <Text style={{margin: 6}}>
              Agree to{' '}
              <Text style={{color: 'skyblue'}}>Terms & Conditions</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      
     </ScrollView>

      <BottomSheet
        ref={this.bs}
        snapPoints={[400, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}></Animated.View>

    
</View>
    
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: 'black',
    borderWidth: 3,
  },
  phoneNumberView: {
    width: 'auto',
    height: 50,
    margin: 10,
    backgroundColor: '#d9effc',
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    margin: 20,

    padding: 8,
    borderRadius: 20,
    borderColor: 'skyblue',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'skyblue',
    fontWeight: 'bold',
  },

  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    marginTop: -20
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginTop: 10
  
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#ec7842',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
 
});


