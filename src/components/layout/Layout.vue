<template>
    <div id="layout">
        <el-container>
            <el-header>
                <Nav></Nav>
            </el-header>
            <el-container>
                <el-aside width="auto">
                    <aside-menu></aside-menu>
                    
                </el-aside>
                <el-main>
                    <!-- <main-test></main-test> -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {Nav,AsideMenu} from './subcomponents'
    import MainTest from '@/components/view/MainTest'       //引入单个组件用{}方式会报错
    export default  {
        name:'Layout',
        components:{
            Nav,
            AsideMenu,
            MainTest
        },
        methods:{
            
        }
    }
</script>
<style scoped>
    .el-header, .el-footer {
    background-color: #3775f7;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
/**************修改默认值********************/
    #layout{
        height:100%
    }
    .el-container {  
        height: 100%;
    }
    .el-aside{
        text-align:left;
    }
</style>
