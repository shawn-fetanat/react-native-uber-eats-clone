import React from "react";
import {Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {auth} from "../config/firebase";
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/actions/userActions";
import FormikForm from "../components/forms/FormikForm";
import FormikField from "../components/forms/FormikField";
import FormikSubmitButton from "../components/forms/FormikSubmitButton";

const Login = ({navigation}) => {
    const dispatch = useDispatch();

    const logInUser = ({email, password}) => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch(loginUser(user));
                navigation.navigate("Home");
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
                <Text style={{textAlign: "center", marginBottom: 50}}>Login to Uber Eats</Text>
            </View>
            <FormikForm
                initialValues={{email: "", password: ""}}
                onSubmit={(values) => logInUser(values)}
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
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCompleteType="password"
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.loginButtonContainer}>
                        <FormikSubmitButton title="Login" />
                    </View>
                    <View style={styles.signUpButtonContainer}>
                        <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
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

export default Login;
