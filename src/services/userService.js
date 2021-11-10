export default class UserService {
    add(user){
        console.log("Kullanıcı Eklendi:" + user)
    }

    list(){
        console.log("Kullanıcılar listelendi")
    }

    getById(id){
        console.log("ID:" + id + " kullanıcısını getirildi")
    }

}