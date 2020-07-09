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
    },
    menu(){
        return new Promise((resolve,reject)=>{
            resolve([
                {
                    name:"用户列表",path:"/user",id:"1", list:[{
                        name:"列表",path:"/user/list",id:"11"
                    },{
                        name:"编辑",path:"/user/add",id:"12"
                    }]
                }
            ])
    })
    }
}