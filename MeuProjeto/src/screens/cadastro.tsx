import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from '../styles/CadastroScreenStyles';
import InputComponent from '../components/Input';
import TermosCheckBox from '../components/Checkbox';
import ButtonComponent from '../components/Button';

export default function CadastroScreen({ navigation }) {
    const [termosAceitos, setTermosAceitos] = useState<boolean>(false);

    const handleTermosChange = (checked: boolean) => {
        setTermosAceitos(checked);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Cadastre-se</Text>
                <Text style={styles.subTitulo}>Preencha o formulário abaixo para realizar o cadastro</Text>
            </View>

            <View style={styles.formulario}>

                <Text style={styles.texto}>Nome Completo:</Text>
                <InputComponent />

                <Text style={styles.texto}>CPF:</Text>
                <InputComponent />

                <Text style={styles.texto}>Data de Nascimento:</Text>
                <InputComponent />

                <Text style={styles.texto}>Email:</Text>
                <InputComponent />

                <Text style={styles.texto}>Senha:</Text>
                <InputComponent secureTextEntry />

                <Text style={styles.texto}>Comfirmar Senha:</Text>
                <InputComponent secureTextEntry />

                <TermosCheckBox isChecked={termosAceitos} onValueChange={handleTermosChange} />

            </View>
            <View style={styles.botao}>
            <ButtonComponent onPress={() => console.log('Cadastro Concluido')} text="Concluir Cadastro" />
            </View>
        </View>
    );
}
