import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

function List({icon, titulo, subtitulo, onPress}){
    return(
        <View>
            <TouchableOpacity
            onPress={onPress}
            >
                <Image 
                source={icon}
                />
                <View>
                    <Text>{titulo}</Text>
                    <Text>{subtitulo}</Text>
                </View>
                <Image 
                source={require('../../assets/img/chevron-right.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default List;