import React from "react";
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {auth} from "../config/firebase";
import FormikForm from "../components/forms/FormikForm";
import FormikField from "../components/forms/FormikField";
import FormikSubmitButton from "../components/forms/FormikSubmitButton";

const SignUp = ({navigation}) => {

    const signUpUser = ({email, password}) => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                    navigation.navigate("Login");
            })
            .catch((error) => {
                if (error) {
                    Alert.alert('Error: ', error.message);
                }
            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={require("../assets/icons/uber-eats-logo.png")}
                    style={{marginBottom: 25, marginLeft: 125}}
                />
                <Text style={{textAlign: "center", marginBottom: 50}}>Sign Up for Uber Eats</Text>
                <Text style={{textAlign: "center", marginBottom: 20}}>Enter your email and password to create an account</Text>
            </View>
                <FormikForm
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values) => signUpUser(values)}
                >
                    <Text style={styles.text}>Email: </Text>
                    <FormikField
                        name="email"
                        style={styles.input}
                        placeholder="Email"
                        autoCompleteType="email"
                    />
                    <Text style={styles.text}>Password: </Text>
                    <FormikField
                        name="password"
                        style={styles.input}
                        placeholder="Password"
                        autoCompleteType="password"
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.loginButtonContainer}>
                            <FormikSubmitButton
                                title="Create Account"
                            />
                        </View>
                    </View>
                </FormikForm>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 160
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        marginLeft: 12,
    },
    buttonContainer: {
        padding: 5,
        marginTop: 20,
        marginLeft: 50,
        marginRight: 60,
    },
    loginButtonContainer: {
        padding: 10,
    },
    signUpButtonContainer: {
        padding: 10,
    }
});

export default SignUp;
