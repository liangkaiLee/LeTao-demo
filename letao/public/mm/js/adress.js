$(function() {
    // 获取用户存储的收货地址
    $.ajax({
        url: ' /address/queryAddress',
        type: 'get',
        success: function(res) {
            // console.log(res)

            // 拼接模板
            var html = template('adressTpl', {result:res})
            // console.log(html)
            $('adress-box').html(html)
        }
    })
})