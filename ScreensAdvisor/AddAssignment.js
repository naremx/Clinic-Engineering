import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class AddAssignment extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      description: ''
    };
  }
  updateValue(text , field){
    if(field == 'topic'){
        this.setState({
          topic : text
        })
    }
    else if(field == 'description'){
        this.setState({
          description : text
        })
    }
}
submit(){
  let collection={}
  collection.id=this.props.AdDateTimeDetail.id
  collection.topic=this.state.topic
  collection.description=this.state.description
  collection.start_date=this.state.start_date
  collection.end_date=this.state.end_date_date
  console.log(collection);

  Actions.AdSelectModeDoc();

  var url = 'http://10.16.2.185:8000/Document/adddocument/' ;

  fetch(url, {
  method: 'POST', 
  body: JSON.stringify(collection),
  headers:{
      'Content-Type': 'application/json' ,
      Authorization : `Token ${this.props.token}`,
     }
  })
}
   render(){  
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
      <View style={Styles.Container}>
      <View style={{alignItems:'center'}}>
      <View style={Styles.ContainerContacts}>
          <View style={{ marginLeft : 30 , marginTop : 50 }}>
              <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >ชื่อ</Text>
              <Text style={{color : '#495090' , fontSize: 20 , fontWeight: 'bold', margin : 5 }}> {this.props.AdDateTimeDetail.user}</Text>
              <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >หัวเรื่อง</Text>
              <TextInput style={Styles.inputBoxAss} onChangeText={(text) => this.updateValue(text, 'topic')}/>
              <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >รายละเอียดเอกสาร</Text>
              <TextInput style={Styles.inputBoxAss} onChangeText={(text) => this.updateValue(text, 'description')}/>
              <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >วันที่รับเอกสาร</Text>
              <DatePicker
                style={{width: 200}}
                date={this.state.start_date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2019-01-01"
                maxDate="2022-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    width: 320,
                    height: 40,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    borderColor:'#95a3e6',
                    borderWidth: 1,
                    paddingHorizontal: 16,
                    fontSize: 15,
                  }
                }}
                onDateChange={(date) => {this.setState({start_date: date})}}
              />
              <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >วันที่ส่งเอกสาร</Text>
              <DatePicker
                style={{width: 200}}
                date={this.state.end_date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2019-01-01"
                maxDate="2022-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    width: 320,
                    height: 40,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    borderColor:'#95a3e6',
                    borderWidth: 1,
                    paddingHorizontal: 16,
                    fontSize: 15,
                  }
                }}
                onDateChange={(date) => {this.setState({end_date: date})}}
              />
          </View>
          <View style={{alignItems:'center'}}>
              <TouchableOpacity onPress={() => this.submit()}>
              <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonAddAss}>
              <Text style = {{ color: '#fff', 
                        fontSize: 20,
                        textAlign: 'center',
                        marginTop: 10,
                        fontWeight: 'bold'
                        }}>เพิ่มงาน</Text>
              </LinearGradient>
              </TouchableOpacity>
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
      alignItems:'center'
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
  inputBoxAss:{
    width: 320,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor:'#95a3e6',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  ButtonAddAss: {
    width: 200,
    height: 50,
    backgroundColor: '#000',
    marginTop: 50,
    borderRadius: 20,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
  },
});

const mapStateToProps = ({ LoginUser_Reducer , Ad_Select_Time_Detail_Reducer }) => {
  const { token} = LoginUser_Reducer;
  const { AdDateTimeDetail } = Ad_Select_Time_Detail_Reducer;
      return { token,AdDateTimeDetail };
}

export default connect(mapStateToProps)(AddAssignment);




