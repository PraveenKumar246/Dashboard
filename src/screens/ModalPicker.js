import { StyleSheet, Text, View ,TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import React from 'react';


    const OPTIONS =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {

    
    const onPressItem = (option) => {
      props.changeModalVisibility(false);
      props.setDay(option);
    }

    const option = OPTIONS.map((item,index) =>{
      return (
        <TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item)}>
        <Text style= {styles.text}>{item}</Text>
        </TouchableOpacity>
      );
    });

  return (
    <TouchableOpacity onPress={()=>props.changeModalVisibility(false)} style={styles.container}>
<View style={[styles.modal , {width : WIDTH - 20, height: HEIGHT/2}]}>
  <ScrollView>{option}</ScrollView>
</View>
    </TouchableOpacity>
  )
}

export default ModalPicker;

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