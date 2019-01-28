import React from 'react';
import { Modal,View,Text, TouchableOpacity } from 'react-native';



class ModalCard extends React.Component {
    constructor(){
        super()
        this.state = {
            showMe:true
        }
    }

    render() {
        const { ModalBox } = styles;
        console.log(this.state.visible)
        return(
            <View style={styles.container}>
                <Modal visible={this.state.showMe}
                onRequestClose ={()=>console.warn("this is close")}>
                    <View style={ModalBox}>
                        <Text>MODAL</Text>
                        <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                            <Text>close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
                    <Text>Open</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles ={
    container:{
        flex: 1
    },
    ModalBox:{
        width: 500,
        height: 300,
        backgroundColor: 'red',
    }
};

export default ModalCard;