<template>
    <div>
        <el-popover
            placement="bottom"
            width="160"
            v-model="visible">
            <div>
                <el-button type="text" @click="visible = false">修改密码</el-button>
            </div>
            <div>
                <el-button type="text"  @click="visible = false">注销</el-button>
            </div>
            
            <img src="https://vuejs.org/images/logo.png" alt="" id="nav-avatar" slot="reference" >
        </el-popover>
    </div>
        
</template>
<script>
    export default{
        data(){
            return {
                visible:false,
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
</style>
