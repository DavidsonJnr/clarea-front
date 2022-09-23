import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header-component";
import authService from "../../services/auth/auth-service";
import { cadastroStyle } from "./cadastro-style";

interface CadastroScreenProps {
    navigation: any
}

function Cadastro(props: CadastroScreenProps) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    useEffect(() => {
        async function getUserLogado() {
            let userLogado = await authService.getCurrentUser();
            if(userLogado) {
                props.navigation.navigate("Home");
            }

        }

        getUserLogado()
    }, [])

    const cadastrar = () => {
        if(password != confirmPassword) {
            return alert('Senhas não conferem!');            
        }

        let dataCad = {name: name, email: email, password: password};
        realizarCadastro(dataCad);
    }

    async function realizarCadastro(obj) {
        const user = await authService.register(obj.name, obj.email, obj.password);
        if(user.id) {
            alert('Cadastro realizado com sucesso!');            
            setTimeout(props.navigation.navigate("Login"), 1000);
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
              <HeaderComponent title="Cadastro" />
            <View style={cadastroStyle.content}>
                <TextInput label="Nome" value={name} onChangeText={name => setName(name)}></TextInput>
                <TextInput label="Email" value={email} keyboardType="email-address" onChangeText={email => setEmail(email)}></TextInput>
                <TextInput label="Senha" value={password} secureTextEntry={true} right={<TextInput.Icon name="eye" color={cadastroStyle.icon.color} />} 
                        onChangeText={password => setPassword(password)}></TextInput>
                <TextInput label="Confirmar Senha" value={confirmPassword} secureTextEntry={true} right={<TextInput.Icon name="eye" color={cadastroStyle.icon.color} />}
                        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} ></TextInput>
                <Button mode="contained" style={cadastroStyle.btnCadastro} onPress={cadastrar}>Cadastrar</Button>
            </View>
            </ScrollView>

        </SafeAreaView>
    )

}

export default Cadastro;