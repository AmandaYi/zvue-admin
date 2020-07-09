import apis from "./apis"
export default {
    loginByUserName(data){
        return new Promise((resolve,reject)=>{
                if(data.username==="admin" && data.password==="123456") {
                    resolve("wdijwidwhjoihwoidhwuohwdouhwouhdw")
                }else{
                    reject("密码错误")
                }
        })
    }
}