import React, {useState} from "react";
import { View,Text,StyleSheet} from "react-native";
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";
import { router } from 'expo-router';

const SignUpScreen= () =>{

    const [username, setUserName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [passwordRepeat, setPasswordRepeat]= useState('');

    const onRegisterPressed= () => {
        console.warn("onRegisterPressed");
    }

    const onSignUpPressed= () => {
        console.warn("onSignUpPressed");
    }

    const onSignInPressed= () => {
        console.warn("onSignInPressed");
    }

    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    }

    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    }


    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput placeholder={"Username"} value={username} setValue={setUserName} />
            <CustomInput placeholder={"Email"} value={email} setValue={setEmail} />
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder={"Repeat Password"} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>

            <CustomButton text="Register" onPress= {onRegisterPressed}/>
            <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use </Text>and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
            <CustomButton text="Have an account? Sign in" onPress= {onSignInPressed} type="TERTIARY"/>
        </View>
    );
};

const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:"#051C60",
        margin: 10
    },
    text:{
        color:"gray",
        marginVertical:10

    },
    link:{
        color:"#FDB075"
    }

})

export default SignUpScreen;
