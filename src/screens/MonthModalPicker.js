import { StyleSheet, Text, View ,TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import React from 'react';


    const OPTIONS =['January','February','March','April','May','June','July','August','September','October','November','December'];
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

const MonthModalPicker = (props) => {

    
    const onPressItem = (option) => {
      props.changeModalVisibility1(false);
      props.setMonth(option);
    }

    const option = OPTIONS.map((item,index) =>{
      return (
        <TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item)}>
        <Text style= {styles.text}>{item}</Text>
        </TouchableOpacity>
      );
    });

  return (
    <TouchableOpacity onPress={()=>props.changeModalVisibility1(false)} style={styles.container}>
<View style={[styles.modal , {width : WIDTH - 20, height: HEIGHT/2}]}>
  <ScrollView>{option}</ScrollView>
</View>
    </TouchableOpacity>
  )
}

export default MonthModalPicker;

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  modal:{
    backgroundColor:'white',
    borderRadius:10,
  },
  option:{
    alignItems:'center',
  },
  text:{
    margin:20,
    fontSize:20,
    fontWeight:'bold',
    
  }
})