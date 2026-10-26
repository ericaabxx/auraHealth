import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Calcula a duração do sangramento, incluindo o primeiro e o último dia.
function calcularDuracaoSangramento(inicio, fim) {
    const dataInicio = new Date(`${inicio}T12:00:00`);
    const dataFim = new Date(`${fim}T12:00:00`);

    if (
        Number.isNaN(dataInicio.getTime()) ||
        Number.isNaN(dataFim.getTime()) ||
        dataFim < dataInicio
    ) {
        return null;
    }

    const diferenca = dataFim.getTime() - dataInicio.getTime();
    const dias = diferenca / (1000 * 60 * 60 * 24);

    return Math.floor(dias) + 1;
}

// Calcula a duração entre o início de duas menstruações.
function calcularDuracaoCiclo(inicioAnterior, inicioAtual) {
    const dataInicioAnterior = new Date(`${inicioAnterior}T12:00:00`);
    const dataInicioAtual = new Date(`${inicioAtual}T12:00:00`);

    if (
        Number.isNaN(dataInicioAnterior.getTime()) ||
        Number.isNaN(dataInicioAtual.getTime()) ||
        dataInicioAtual <= dataInicioAnterior
    ) {
        return null;
    }

    const diferenca =
        dataInicioAtual.getTime() - dataInicioAnterior.getTime();

    return Math.floor(diferenca / (1000 * 60 * 60 * 24));
}

// Calcula em qual dia do ciclo a pessoa está.
function calcularDiaCiclo(inicio) {
    const dataInicio = new Date(`${inicio}T12:00:00`);
    const hoje = new Date();
    hoje.setHours(12, 0, 0, 0);

    if (
        Number.isNaN(dataInicio.getTime()) ||
        dataInicio > hoje
    ) {
        return null;
    }

    const diferenca = hoje.getTime() - dataInicio.getTime();

    return Math.floor(diferenca / (1000 * 60 * 60 * 24)) + 1;
}

// Identifica a fase estimada do ciclo.
function identificarFase(
    diaAtualCiclo,
    duracaoSangramento,
    duracaoCiclo = 28
) {
    if (!diaAtualCiclo || diaAtualCiclo < 1) {
        return "Sem dados do ciclo";
    }

    if (
        !duracaoCiclo ||
        duracaoCiclo < 1 ||
        duracaoSangramento === null
    ) {
        return "Dados insuficientes";
    }

    if (diaAtualCiclo <= duracaoSangramento) {
        return "Menstruação";
    }

    // Estimativa simples: ovulação cerca de 14 dias
    // antes do início esperado da próxima menstruação.
    const diaOvulacao = duracaoCiclo - 14;

    if (diaAtualCiclo < diaOvulacao - 2) {
        return "Fase folicular";
    }

    if (diaAtualCiclo <= diaOvulacao + 1) {
        return "Ovulação";
    }

    if (diaAtualCiclo <= duracaoCiclo) {
        return "Fase lútea";
    }

    return "Ciclo além da duração estimada";
}

// Texto complementar exibido no card.
function obterDescricaoFase(faseAtual) {
    if (faseAtual === "Menstruação") {
        return "Seu ciclo está na fase menstrual.";
    } else if (faseAtual === "Fase folicular") {
        return "Seu corpo está se preparando para a ovulação.";
    } else if (faseAtual === "Ovulação") {
        return "Período estimado da ovulação.";
    } else if (faseAtual === "Fase lútea") {
        return "Fase após a ovulação estimada.";
    } else if (faseAtual === "Ciclo além da duração estimada") {
        return "Registre a próxima menstruação para atualizar seu ciclo.";
    }

    return "Registre suas datas para acompanhar seu ciclo.";
}

function Card() {
    // Dados temporários para testar o componente.
    // Depois, serão substituídos pelos registros da pessoa.
    const inicioAnterior = "2026-09-20";
    const inicioAtual = "2026-10-20";
    const inicioSangramento = "2026-10-20";
    const fimSangramento = "2026-10-25";

    const duracaoSangramento = calcularDuracaoSangramento(
        inicioSangramento,
        fimSangramento
    );

    const duracaoCiclo = calcularDuracaoCiclo(
        inicioAnterior,
        inicioAtual
    );

    const diaAtualCiclo = calcularDiaCiclo(inicioAtual);

    // Usa o ciclo anterior como estimativa provisória.
    const faseAtual = identificarFase(
        diaAtualCiclo,
        duracaoSangramento,
        duracaoCiclo
    );

    const descricao = obterDescricaoFase(faseAtual);

    return(
        <View style={styles.card} >
            <View style={styles.title}  >
            <View style={styles.text}>
            <Image 
            style={styles.icon}
            source={require('../../assets/img/droplet-purble.png')}
            />
            <Text style={styles.titulo}>{faseAtual}</Text>
            </View>
            <Text style={styles.dia}>Dia {diaAtualCiclo}</Text>
            </View>
            <Text style={styles.descricao}>{descricao}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
    width: 352,
    minHeight: 98,
    backgroundColor: '#FAF6FF',
    borderWidth: 1,
    borderColor: '#7923C5',
    borderRadius: 12,
    padding: 10,
    margin: 5,
},
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    icon: {
        width: 20,
        height: 20
    },
    titulo: {
    fontSize: 16,
    fontFamily: 'Inter_18pt-SemiBold',
    color: '#2D3748',
},
    dia: {
    fontSize: 13,
    fontFamily: 'Inter_18pt-SemiBold',
    color: '#7923C5',
},
    descricao: {
    fontSize: 13,
    fontFamily: 'Inter_18pt-Regular',
    color: '#647084',
    textAlign: 'left',
    marginTop: 5,
},
    text: {
        flexDirection: 'row',
        gap: 5,
    }
    
})

export default Card;