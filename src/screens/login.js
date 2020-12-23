import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import UserData from '../data/user_data';

const Login = ({ navigation }) => {
    const [UserName, SetUserName] = useState('');
    const [PassWord, SetPassWord] = useState('');
    const [loginState, setLoginState] = useState(false);

    const Authentication = () => {
        var user = UserData.find(user => user.email === UserName);
        console.log(user);
        if (user) {
            if (UserName === user.email && PassWord === user.password) {
                setLoginState(true)
            } else {
                setLoginState(false);
                alert('Incorrect Password');
                SetUserName(UserName);
            }
        } else {
            alert('No User Found');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginHeading}>Login</Text>
            <TextInput textContentType='emailAddress' style={styles.textInput} placeholder="Email" onChangeText={(val) => SetUserName(val)} />
            <TextInput textContentType='password' style={styles.textInput} placeholder="Password" onChangeText={(val) => SetPassWord(val)} />

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.loginButton}
                onPress={() => {
                    Authentication();
                    console.log(loginState);
                    if (loginState) {
                        navigation.navigate('EventBookingScreen')
                    }
                }}
            >
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.signupText}>Not signed in ?</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[styles.signupText, { marginLeft: 5, color: 'blue' }]}>SignUp Now</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50
    },
    loginHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#342828',
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 20
    },
    textInput: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        marginVertical: 5
    },
    loginButton: {
        backgroundColor: '#021e5e',
        alignItems: 'center',
        marginTop: 30
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 10
    },
    signupText: {
        color: 'rgba(0,0,0,0.6)',
        marginTop: 20
    },
})

export default Login;