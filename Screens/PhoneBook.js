import React from 'react';
import { StyleSheet,View,Button,Image } from 'react-native';
import { LinearGradient,Constants,DocumentPicker,ImagePicker } from 'expo';



class AdvisorEditSelectDate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
}

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  alert(result.uri);
  console.log(result)

  if (!result.cancelled) {
    this.setState({ image: result.uri });
  }
};
   render(){  
    let { image } = this.state;
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
              <Button
              title="Select Document"
              onPress={this._pickDocument}
            />
          <View style={{ 'marginTop': 20}}>
          <Button
            title="Select Image"
            onPress={this._pickImage}
          />
          {image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
          </View>
          </View>
          </View>
        </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
    },
    ContainerContacts: {
      width: 370,
      height: 600,
      backgroundColor: 'white',
      borderRadius: 18,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
    },

});


export default AdvisorEditSelectDate