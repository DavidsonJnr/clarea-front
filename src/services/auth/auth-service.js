import api from "../../api";
import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthService {
    async login(email, password) {

      try {
          const response = await api.post("/authenticate", {
          email,
          password
        })
          if(response.status == 200){
              // test for status you want, etc
              console.log(response.status);
          }    
          // Don't forget to return something   
          if (response.data.token) {
            try {
              await AsyncStorage.setItem('user', JSON.stringify(response.data))
            } 
            catch(err) {
              console.error(err);
              return;
            }
            
          }

         return response.data;
     }
     catch (err) {
         console.error(err);
     }

    }

    async logout() {
      try {
        await AsyncStorage.removeItem('user');
        return true;
      }
      catch(err) {
          console.error(err);
          return false;
      }
    }

    async register(name, email, password) {

        try {
          const response = await api.post("/register", {
          name,
          email,
          password
        })
          if(response.status == 201){
              // test for status you want, etc
              console.log(response.status);
          }    
          
         return response.data;
        }
        catch (err) {
          console.error(err);
        }

    }

    async getCurrentUser() {
        try {
          const user = await AsyncStorage.getItem('user');
          return JSON.parse(user);
        } 
        catch (err) {
          console.error(err);
        }        
    }
}

export default new AuthService();