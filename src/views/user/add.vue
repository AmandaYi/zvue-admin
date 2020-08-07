<template>
    <div>
        <avue-form :option="option" v-model="form" ref="user">
            <template slot="menuForm">
            <el-button type="primary" @click="ok">提 交</el-button>
            <el-button  @click="rollback">清 空</el-button>
        </template>
        </avue-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                username:""
            },
            option:{
                column:[{
                        label:'姓名',
                        prop:'username',
                        rules: [{
                            required: true,
                            message: "请输入姓名",
                            trigger: "blur"
                        }]
                }]
            }

        }
    },
    methods:{
        ok(){
        this.$refs.user.validate((vaild,done)=>{
          if(vaild){
           console.log(vaild)
            setTimeout(()=>{
              done()
            },2000)
          }
        })
        }
    }
    
}
</script>