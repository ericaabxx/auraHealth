import React, {useState} from "react";

//BottomNavigation cuida da barra inteira.
import navigation from "../../data/navigation";
import NavigationItem from "../NavigationItem";
import { View, StyleSheet,  } from "react-native";

function BottomNavigation(){

    const [telaSelecionada, setTelaSelecionada] = useState('Início')


    return(
        <View style={styles.container} >
            {navigation.map((opcao) => (
                <NavigationItem
                key={opcao.tela}
                opcao={opcao}
                selecionado={telaSelecionada === opcao.tela}
                onPress={() => setTelaSelecionada(opcao.tela)}

                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       height: 64,
       justifyContent: 'space-between',
       alignItems: 'center',
       flexDirection: 'row'
    }
})


export default BottomNavigation;