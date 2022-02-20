var indexVue = new Vue({
    el: '#index-vue',
    template: "<div v-if=!canLogin> " +
                    "<el-container> " +
                        "<el-header style='height:100px; color:#FFF;background-color:#409EFF; border-color:#409EFF;'> " +
                            "<h1>{{ beforeLoginText }}</h1> " +
                        "</el-header> " +
                        "<el-container> " +
                            "<el-aside></el-aside> " +
                            "<el-main> "+
                                "<el-row> " +
                                    "<el-col :span='4'>ID：</el-col> " +
                                    "<el-input v-model='id' style='width:200px'></el-input> " +
                                "<el-row/> " +
                                "<el-row> " +
                                    "<el-col :span='4'>Password：</el-col> " +
                                    "<el-input v-model='password' style='width:200px'></el-input> " +
                                "<el-row/> " +
                                "<el-row><el-button type='primary' @click='clickSubmit'>Submit</el-button></el-row> " +  // submitボタン入れたい  
                            "</el-main> " +
                        "</el-container> " +
                    "</el-container> " +
              "</div> " +
              "<div v-else> " +
                    "<el-container> " +
                        "<el-header style='height:100px; color:#FFF;background-color:#409EFF; border-color:#409EFF;'> " +
                            "<el-col>" +
                                "<h1>" +
                                    "<span style='text-align: left;'> {{ afterLoginText }}</span>" +
                                    "<el-button style='text-align: right;' type='primary' @click='clickSubmit'>Logout</el-button> " +  // submitボタン入れたい  
                                "</h1>" +
                            "<el-col>" +
                        "</el-header> " +
                        "<main-vue></main-vue> " +
                    "</el-container> " +
              "</div> " ,
    data: {
        beforeLoginText: 'FSIけいおんWeb　ログイン', 
        afterLoginText: 'FSIけいおんWeb ようこそ！', 
        id : '',
        password : '',
        canLogin : false,
        loginUserList : [
            {
                id : 'YNGYRN' ,
                password : 0926 ,
                nickname : 'やなぎー'
            },
            {
                id : 'TNKAIK' ,
                password : 0623,
                nickname : 'あいか'
            },
            {
                id : 'NKSTMSHR' ,
                password : 0000,
                nickname : 'なかちゃん'
            }
        ],
    },
    methods: {
        clickSubmit : function () {
            this.canLogin = !this.canLogin;
        },
    },
    components: {
        'main-vue' : mainVue,
    },
});
