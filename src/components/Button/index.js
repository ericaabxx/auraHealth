import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

//propriedades: icon e texto


function Button({icon, texto}){
    return(
        <TouchableOpacity style={styles.container} >
            <Image style={styles.icon}
            source={icon}
            />
            <Text style={styles.text} >{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9333EA',
        flexDirection: 'row'
    }, 
    icon: {
        height: 20,
        height: 20,
        
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    }
})

export default Button;