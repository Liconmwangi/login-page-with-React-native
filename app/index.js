
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index(){
    const[showPassword, setPassword]=useState(false);
    function togglePasswordVisibility() {
        setPassword(!showPassword);
}
    return(
        <View style={Styles.container}>
            <Text style={Styles.heading}>welcomeback</Text>

            <Text style={Styles.subtitle}>
                Login to student account
            </Text>


            <Text Styles={Styles.label}>Email Address</Text>
           <TextInput placeholder="Email address" style={Styles.input}/>

            <Text  style={Styles.label}>Password</Text>
            <View style={Styles.setPasswordContainer}>
            < TextInput placeholder="Enter your password" style={Styles.passinput} secureTextEntry={!setPassword}/> 
            <Pressable onPress={togglePasswordVisibility}>
            <Ionicons style={Styles.eyeButton} name={showPassword? "eye" : "eye-off"}/>
                         
                </Pressable>

            </View>

        <Pressable style={Styles.buttonText}>Login</Pressable>

        <Text style={Styles.footer}></Text>
            Don't have an  account?   Register
        </View>

        
    );

};

const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#EAF1FB"
    },
    heading:{
        fontSize:30,
        fontWeight:"buld",
        color:"#163A70",
        textAlign:"center",
        marginBottom:10

        
    },
    subtitle:{
        fontSize:16,
        color: "#64748B",
        textAlign:"center",
        marginBottom:20,

    },
    setPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
},
   
    
    passwordInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#1E293B",
},
buttonText: {
    width: "100%",
    height: 50,
    backgroundColor: "#163A70",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
},
footer: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginTop: 20,
},
 input:{
        width:"100%",
        height:50,
        backgroundColor:"#F8FAFC",
        borderWidth:1,
        borderColor:"#CBD5E1",
        borderRadius:8,
        paddingHorizontal:10,
        marginBottom:20,
    },
    passinput:{
        flex:1,
        height:"90%",
        fontSize:16,
        color:"pink"
    },
    eyeButton:{
        width:40,
        height:5,
        paddingBottom:30,
        justifyContent:"center",
        alignItems:"center",
        color:"cyan",
        margin:5,
        fontSize:30,
    }
    

})