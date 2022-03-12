var indexVue = new Vue({
    el: '#calculator-vue',
    template: "<div> " +
                  "<div>{{message}}</div>" +
              "</div> " ,
    data: {
        message: '電卓移行先'
    },
    methods: {
        clickSubmit : function () {
            this.canLogin = !this.canLogin;
        },
    },
    components: {
    },
});
