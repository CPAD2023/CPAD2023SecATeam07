import React, {useState} from "react";
import { View,Text,Image,StyleSheet, useWindowDimensions } from "react-native";
import favicon from '../../../assets/images/favicon.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";


const SignInScreen= () =>{

    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed= () => {
        console.warn("Sign In");
    }

    const onForgotPasswordPressed= () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignUpPressed= () => {
        console.warn("onSignUpPressed");
    }

    return (
        <View style={styles.root}>
            <Image source={favicon} style={[styles.logo,{height:height*0.3}]} resizeMode="contain" />

            <CustomInput placeholder={"Username"} value={username} setValue={setUserName} />
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>

            <CustomButton text="Sign in" onPress= {onSignInPressed}/>
            {/* <CustomButton text="Forgot Password" onPress= {onForgotPasswordPressed} type="TERTIARY"/> */}
            <CustomButton text="Don't have an account? Create one" onPress= {onSignUpPressed} type="TERTIARY"/>
        </View>
    );
};

const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20
    },
    logo:{
        marginBottom:"20%",
        width:"70%",
        maxWidth: 300,
        maxHeight:200,
    },

})

export default SignInScreen;
