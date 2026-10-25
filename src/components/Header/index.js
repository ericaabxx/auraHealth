import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header({ nome }){
 
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    function date(){
        const hoje = new Date();
        const diaNumero = hoje.getDay();
        const diaSemana = diasDaSemana[diaNumero]

        const diaDoMes = hoje.getDate()
        const mes = hoje.getMonth()
        const nomeDoMes = mesesDoAno[mes]
        const ano = hoje.getFullYear()

        const mensagem = `${diaSemana}, ${diaDoMes} de ${nomeDoMes} de ${ano}`
        return mensagem;
    }



    return(
        <View style={styles.container} >
            <Text  style={styles.titulo}>Olá, {nome}</Text>
            <Text  style={styles.subTitulo}>{date()}</Text>
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            height: 100,
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        },
        titulo: {
            fontSize: 27,
            fontFamily: 'Inter',
            fontWeight: 'bold',
            color: '#000'
        },
        subTitulo: {
            fontSize: 13,
            fontFamily: 'Inter',
            fontWeight: '100',
            color: '#647084'
        }
    })

export default Header;