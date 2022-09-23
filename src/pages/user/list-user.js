import React, {useState, useEffect} from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { DataTable } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header-component";
import userService from "../../services/user/user-service";

function ListaUsuarios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await userService.getAll();
            console.log(response.data)
            setUsers(response.data)
        }
    
        getUsers()
      }, [])

    return (
        <SafeAreaView>
            <ScrollView>
              <HeaderComponent title="Listagem Usuários" />
                <View >
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>ID</DataTable.Title>
                            <DataTable.Title>Name</DataTable.Title>
                            <DataTable.Title>Email</DataTable.Title>
                        </DataTable.Header>

                        {
                            users.map(user => {
                                return (
                                    <DataTable.Row
                                    key={user.id} // you need a unique key per item
                                    onPress={() => {
                                        // added to illustrate how you can make the row take the onPress event and do something
                                        console.log(`selected account ${user.name}`)
                                    }}
                                    >
                                    <DataTable.Cell>
                                        {user.id}
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        {user.name}
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        {user.email}
                                    </DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })}
                    
                    </DataTable>
                </View>
            </ScrollView>

        </SafeAreaView>
    )

}

export default ListaUsuarios;