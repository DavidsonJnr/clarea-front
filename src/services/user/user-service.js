import api from "../../api";

class UserDataService {
    getAll() {
      return api.get("/users");
    }
  
    get(id) {
      return api.get(`/users/${id}`);
    }
  
    create(data) {
      return api.post("/users", data);
    }
  
    update(id, data) {
      return api.put(`/users/${id}`, data);
    }
  
    delete(id) {
      return api.delete(`/users/${id}`);
    }
  
    deleteAll() {
      return api.delete(`/users`);
    }
  
    findByTitle(title) {
      return api.get(`/users?title=${title}`);
    }
  }
  
  export default new UserDataService();