import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Text,View,StyleSheet,TouchableHighlight } from 'react-native';
import color from '../../containers/styles/colors'
export default class RoundedButton extends Component{
    render(){
        const {text,textColor,background, icon,handleOnPress } =this.props;
        const backgroundColor=background || 'transparent';
        const color =textColor || colors.black;
        return (
            <TouchableHighlight 
            style={[{backgroundColor} ,styles.wrapper]}
            onPress={handleOnPress}
            >
            <View style={styles.buttonTextWrapper}>    
            {icon}
                <Text style={[{color}, styles.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

RoundedButton.propTypes ={
    text: PropTypes.string.isRequired,
    textColor:PropTypes.string,
    background:PropTypes.string,
    icon:PropTypes.object,
    handlerOnPress:PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
        padding:15,
        borderRadius:40,
        borderWidth:1,
        borderColor:color.write,
    },
    buttonTextWrapper:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    buttonText:{
        fontSize:16,
        width:"100%",
        textAlign:'center',
    }
})