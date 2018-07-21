<template>
    <div id="nav-container">
        <span class="hamburger-container iconfont icon-hanbaotubiao" :class="{active:isActive}" @click="asideToggle"></span>
        
        <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo nav-bar-menu"
    mode="horizontal"
    @select="handleSelect"
    background-color="#3775f7"
    text-color="#fff"
    active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
      
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <avatar></avatar>
        
       
    </div>

</template>

<script>
    import Avatar from '@/components/layout/subcomponents/Avatar'
    export default {
        components:{
            Avatar,
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                
            };
        },
        computed:{
            isActive(){
                return this.$store.state.app.asideIsCollapse
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            asideToggle(){
                // this.$store.commit('asideToggle')   //没有命名空间是，所有modules中的同名mutation都会响应
                this.$store.commit('app/asideToggle')
            }
           
        }
    }
</script>

<style scoped>
    #nav-container{
        margin-right:30px;
    }
    .nav-bar-menu {
        /* position:static; */
        float: left;
    }
    .hamburger-container {
        transform: rotate(0deg);
        float: left;
        color:white;
        padding:0 10px;
        cursor: pointer;
    }
    .hamburger-container.active {
        transform: rotate(90deg);
    }

    
</style>



