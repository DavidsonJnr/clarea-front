import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import ListaUsuarios from "./pages/user/list-user";
import Cadastro from "./pages/cadastro/cadastro";

const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
                <Screen name="Login" component={Login}></Screen>
                <Screen name="Home" component={Home}></Screen>
                <Screen name="Cadastro" component={Cadastro}></Screen>
                <Screen name="ListaUsuarios" component={ListaUsuarios}></Screen>
            </Navigator>
        </NavigationContainer>
    )
    
}

export default AppNavigator;