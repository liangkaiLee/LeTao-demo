$(function() {
    // 初始化popPicker组件
    var picker = new mui.PopPicker({layer:3})
    // 给picker对象添加数据
    picker.setData(cityData)
    // 当用户敲击文本框的时候
    $('#selectCity').on('tap', function() {
        // 显示picker
        picker.show(function(selectItems) {
            // console.log(selectItems)
            $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text)
        }) 
    })


    // 添加收货地址
    // 1.获取收货地址管理按钮并且添加点击事件
    // 2.获取用户输入的表单信息
    // 3.对用户输入的表单信息进行校验
    // 4.调用添加收货地址接口 实现功能
    // 5.跳转回收货地址列表页面

    // 1.获取收货地址管理按钮并且添加点击事件
    $('#addAdress').on('tap', function() {
        // 2.获取用户输入的表单信息
        var username = $.trim($("[name='username']").val())
        var postCode = $.trim($("[name='postCode']").val())
        var city = $.trim($("[name='city']").val())
        var detail = $.trim($("[name='detail']").val())
        // 3.对用户输入的表单信息进行校验
        if(!username) {
            mui.toast('请输入收货人姓名')
            return
        }
        if(!postCode) {
            mui.toast('请输入邮政编码')
            return
        }
        if(!city) {
            mui.toast('请输入收货城市')
            return
        }
        if(!detail) {
            mui.toast('请输入详细地址')
            return
        }
        // 4.调用添加收货地址接口 实现功能
        $.ajax({
            url: '/address/addAddress',
            type: 'post',
            data: {
                address: 'city',
                addressDetail: 'detail',
                recipients: 'username',
                postCode: 'postCode'
            },
            success: function(res) {
                // console.log(res)
                if(res.success) {
                    mui.toast('添加收货地址成功')
                    setTimeout(function(){
                        location.href = 'adress.html'
                    }, 2000)
                }
            }
        })

    })


})