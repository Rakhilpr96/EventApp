import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';

import UserData from '../data/user_data';

const SignUp = ({ navigation }) => {
    const [UserName, SetUserName] = useState('');
    const [Email, SetEmail] = useState('');
    const [PassWord, SetPassWord] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                <Text style={styles.loginHeading}>Sign Up</Text>
                <TextInput style={styles.textInput} placeholder="Name" onChangeText={(val) => SetUserName(val)} />
                <TextInput textContentType='emailAddress' style={styles.textInput} placeholder="Email" onChangeText={(val) => SetEmail(val)} />
                <TextInput textContentType='password' style={styles.textInput} placeholder="Password" onChangeText={(val) => SetPassWord(val)} />

                <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={() => navigation.navigate('EventBookingScreen')}>
                    <Text style={styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.signupText}>Already Signed In ?</Text>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            UserData.push({ name: UserName, email: Email, password: PassWord })
                            navigation.navigate('Login');
                        }}
                    >
                        <Text style={[styles.signupText, { marginLeft: 5, color: 'blue' }]}>Login</Text>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
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

export default SignUp;