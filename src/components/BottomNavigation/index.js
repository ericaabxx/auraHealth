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
    position: 'absolute', //permite que a barra fique sobre o conteúdo.
    bottom: 0, //posiciona a barra no rodapé.
    left: 0, //fazem a largura acompanhar a tela.
    right: 0, //fazem a largura acompanhar a tela.

    height: 88,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',

    backgroundColor: '#FFFFFF',
    zIndex: 1, //a barra tende a ficar na frente de componentes com valores menores, dentro das regras de empilhamento do layout.
    elevation: 5, // elevação maior, geralmente com uma sombra mais perceptível.
    }
})


export default BottomNavigation;