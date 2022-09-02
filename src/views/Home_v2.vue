<template>
    <el-container>
        <!-- 头部区域 -->
        <el-header>
            <!-- <img src="../assets/logo.png" alt="" /> -->
            <span>IP画像系统</span>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <el-aside :width="isCollapse ? '70px' : '165px'">
                <el-scrollbar style="width: 100%">
                    <div class="toggle-button" @click="toggleCollapse">|||</div>
                    <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened
                         :collapse-transition="false" router :default-active="$route.path">
                        <el-menu-item index="/statistics">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>网络空间数据统计</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="/map">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>网络空间地图展示</span>
                            </template>
                        </el-menu-item>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>


    </el-container>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
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
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
    }

}
</script>

<style lang="less" scoped>
.el-header {
    height: 55px !important;
    // min-width:1725px ;
    background-color: #333744;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;

    >div {
        display: flex;
        align-items: center;

        span {
            margin-left: 15px;
        }
    }
}

.el-aside {
    // top: 155px;
    height: calc(100vh - 55px);
    background-color: #333744;

    .el-menu {
        border-right: none;
    }
}

.el-main {
    max-width: 100%;
    padding-bottom: 10px;
    // padding: 0 !important;
    // margin-bottom:10px ;
    height: calc(100vh - 55px);
    // top: 155px;
    background-color: #eaedf1;
    // min-width:1725px
    padding: 0;
}


.iconfont {
  margin-right: 10px;
}



.toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>