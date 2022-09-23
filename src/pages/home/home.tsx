import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Paragraph, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header-component";
import authService from "../../services/auth/auth-service";
import { homeStyle } from "./home-style";

interface HomeScreenProps {
    navigation: any
}

function Home(props: HomeScreenProps) {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUserLogado() {
            let userLogado = await authService.getCurrentUser();
            if(!userLogado) {
                props.navigation.navigate("Login");
            }

            console.log(userLogado);
            setUser(userLogado);
        }

        getUserLogado()
    }, [])

    async function deslogar() {
        await authService.logout();
        props.navigation.navigate("Login");
    }

    return (
        <SafeAreaView>
            <HeaderComponent title="Home" />
            <View style={homeStyle.content}>                
                <Title>HOME</Title>
                <Paragraph>Olá {user ? user.name : ""}</Paragraph>

                <Button icon="logout" mode="contained" style={homeStyle.btnSair} onPress={deslogar}>Sair</Button>
            </View>

        </SafeAreaView>
    )

}

export default Home;