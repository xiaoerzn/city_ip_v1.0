<template>
    <el-container>
        <!-- 头部区域 -->
        <el-header>
            <!-- <img src="../assets/logo.png" alt="" /> -->
            <span>IP画像系统</span>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-main>
            <div class="menubox">
                <el-menu mode="horizontal" router background-color="#c0c4cc" text-color="#fff"
                    active-text-color="#ffd04b" :default-active="$route.path">
                    <el-menu-item index="/statistics">网络空间数据统计</el-menu-item>
                    <el-menu-item index="/map">网络空间地图展示</el-menu-item>
                </el-menu>
            </div>
            <!-- 路由占位符 -->
            <router-view></router-view>
        </el-main>

    </el-container>
</template>

<script>
export default {
    data() {
        return {
            menulist: [
                {
                    link: '/statistics',
                    name: '网络空间数据统计'
                },
                {
                    link: '/map',
                    name: '网络空间地图展示'
                },
            ]
        }

    },
    methods: {
        logout() {
            // window.localStorage.clear()
            window.localStorage.removeItem('token')
            this.$router.push('/login')
        },
    }

}
</script>

<style lang="less" scoped>
.el-main {
    max-width: 100%;
    // padding-bottom: 10px;
    // padding: 0 !important;
    // margin-bottom:10px ;
    height: calc(100vh - 65px);
    // top: 155px;
    background-color: #eaedf1;
    // min-width:1725px
    padding:10px;
}

.el-header {
    height: 65px !important;
    // min-width:1725px ;
    background-color: #538ac2;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;

    span {
        margin-left: 15px;
    }
}

.menubox {
    background-color: #eaedf1;
    height: 40px;
}

.el-menu {
    width: 244px;
    height: 35px;
    margin-left: 20px;
    float:right;
}

.el-menu-item {
    height: 35px;
    line-height: 35px;
    padding: 0 5px;
}
</style>