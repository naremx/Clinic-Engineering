import React from 'react';
import { StyleSheet,View,Button,Image,Text } from 'react-native';
import { LinearGradient,Constants,DocumentPicker,ImagePicker } from 'expo';



class AdvisorEditSelectDate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pickerResult: null,
    };
  }
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log('_pickDocument',result);
}

_pickImg = async () => {
  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    base64: true,
    allowsEditing: false,
    aspect: [4, 3],
  });
  console.log(pickerResult)
  this.setState({
    pickerResult,
  });
};
   render(){  
    let { pickerResult } = this.state;
    let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null;
    imageUri && console.log({uri: imageUri.slice(0, 100)});
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
              <Button
              title="Select Document"
              onPress={this._pickDocument}
            />
            <View style={Styles.container}>
              <Button onPress={this._pickImg} title="Open Picker" />
              {pickerResult
                ? <Image
                    source={{uri: imageUri}}
                    style={{ width: 200, height: 200 }}
                  />
                : null}
              {pickerResult
                ? <Text style={Styles.paragraph}>
                    Keys on pickerResult:
                    {' '}
                    {JSON.stringify(Object.keys(pickerResult))}
                  </Text>
                : null}
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