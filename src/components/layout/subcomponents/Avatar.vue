<template>
    <div>
        <el-popover
            placement="bottom"
            width="160"
            v-model="visible">
            <p id="avatar-hello-user">您好！{{userName}}</p>
            <div class="avatar-tools-container" v-if="logged">
                <div>
                    <el-button type="text" @click="visible = false">修改密码</el-button>
                </div>
                <div>
                    <el-button type="text"  @click="visible = false">注销</el-button>
                </div>
            </div>
            <div class="avatar-tools-container" v-else>
                <div>
                    <el-button type="text"  @click="visible = false">登录</el-button>
                </div>
            </div>
            <img :src= "avatarUrl" alt="" id="nav-avatar" slot="reference" >
        </el-popover>
    </div>
        
</template>
<script>
    export default  {
        data() {
            return {
                visible:false,
            }
        },
        computed: {
            avatarUrl() {
                return this.$store.state.userInfo.avatar
            },
            logged(){
                if (this.$store.state.userInfo.name=="游客")
                    return false
                else 
                    return true     
            },
            userName(){
                return this.$store.state.userInfo.name
            }
        }

    }
</script>
<style scoped>
    #nav-avatar{
        float: right;
        border:1px solid white;
        border-radius: 3px;
        margin-top:15px;
        width:30px;
        cursor: pointer;
    }
    .avatar-tools-container{
        text-align: center;
    }
    #avatar-hello-user{
        width:100%;
        text-align:center;
        color:red;
    }
</style>
