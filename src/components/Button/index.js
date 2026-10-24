import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

//propriedades: icon e texto


function Button({icon, texto, funcao}){
    return(
        <TouchableOpacity style={styles.container} onPress={funcao}>
            <Image style={styles.icon}
            source={icon}
            />
            <Text style={styles.text} >{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 352,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9333EA',
        flexDirection: 'row',
        borderRadius: 12,
        gap: 8
    }, 
    icon: {
        height: 20,
        width: 20,
         resizeMode: 'contain'
        
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: 'semibold',
        color: '#fff'
    }
})

export default Button;