import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, TouchableOpacity , ActivityIndicator} from 'react-native';

const AuthForm = (props) => {
    const { error ,handleChange, handleSubmit, isLoading } = props

    return (
        < View style={styles.formContainer} >
            <Text style={styles.error}>{error}</Text>
            <Text style={styles.label}>First Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange(value, 'firstName')}
                placeholder="First Name . . ."
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange(value, 'lastName')}
                placeholder="Last Name . . ."
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange(value, 'email')}
                placeholder="Email . . ."
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange(value, 'password')}
                secureTextEntry={true}
                placeholder="Password . . ."
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange(value, 'confirmPassword')}
                secureTextEntry={true}
                placeholder="Confirm Password . . ."
            />
            {
                isLoading
                    ? (
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="large" color="#D7DBDD" />
                        </View>
                    )
                    : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    )
            }

        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      top: Platform.OS === "ios" ? '16%': '12%',
    },
    input:{
       borderBottomColor: '#D7DBDD',
       borderBottomWidth: 1,
       height: Platform.OS === "ios" ? 30: 34,
       color:"#34495E",
       width: 300,
       marginBottom:20,
    },
    label:{
        fontSize:Platform.OS === "ios" ? 17: 20,
        color:'#D7DBDD'
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#D7DBDD',
        width: 100,
        marginLeft: 80,
        borderRadius:23

    },
    buttonText:{
        padding: 10,
        color:"#34495E"
    },
    error:{
        color:'#943126',
        marginBottom:30,
        fontSize:20
    },
    loaderContainer:{
        position: 'absolute',
        top: Platform.OS === "ios" ? 400: 460,
        left:120
    }
  });

export default AuthForm;