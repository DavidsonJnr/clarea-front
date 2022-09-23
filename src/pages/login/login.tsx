import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Alert } from "react-native";
import { Button, TextInput, Card } from "react-native-paper";
import authService from "../../services/auth/auth-service";
import { loginStyle } from "./login-style";

interface LoginScreenProps {
    navigation: any
}

function Login(props: LoginScreenProps) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   useEffect(() => {
    async function getUserLogado() {
        let userLogado = await authService.getCurrentUser();
        if(userLogado) {
            props.navigation.navigate("Home");
        }
    }

        getUserLogado()
    }, [])

   const login = () => {
        console.log(email + " - " + password);
        let dataLogin = {email: email, password: password};
        realizarLogin(dataLogin);
   }

   async function realizarLogin(obj) {
       const user = await authService.login(obj.email, obj.password);
       if(user) {
          props.navigation.navigate("Home");
       }
       else {
          alert('DADOS INVALIDOS'); 
       }
   }

    const cadastro = () => {
        props.navigation.navigate("Cadastro");
    }

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
            <Card>
                <Card.Title title="Clarea App" titleStyle={loginStyle.cardTitle}></Card.Title>
                <Card.Content>
                    <TextInput  dense={true} value={email} label="Email" keyboardType="email-address" onChangeText={email => setEmail(email)}></TextInput>
                    <TextInput  dense={true} value={password} label="Senha" secureTextEntry={true} onChangeText={password => setPassword(password)} right={<TextInput.Icon name="eye" color={loginStyle.icon.color} />}></TextInput>
                    <Button uppercase={false} style={loginStyle.cardBtn}>Esqueceu sua senha?</Button>
                    <Button mode="contained" disabled={!email || !password} style={loginStyle.cardBtn} onPress={login}>Login</Button>
                    <Button uppercase={false} style={loginStyle.cardBtn} onPress={cadastro}>Cadastre-se</Button>
                </Card.Content>
            </Card>
            </View>
        </SafeAreaView>
    )

}

export default Login;