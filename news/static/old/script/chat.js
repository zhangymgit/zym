/*发送消息*/
function send(headSrc, str) {
    var html = "<div class='send'><div class='msg'><img src=" + headSrc + " />" +
        "<p><i class='msg_input'></i>" + str + "</p></div></div>";
    upView(html);
}

/*接受消息*/
function show(headSrc, str) {
    var html = "<div class='show'><div class='msg'><img src=" + headSrc + " />" +
        "<p><i class='msg_input'></i>" + str + "</p></div></div>";
    upView(html);
}

/*更新视图*/
function upView(html) {
    $('.message').append(html);
    $('body').animate({scrollTop: $('.message').outerHeight() - window.innerHeight}, 200)
}

function sj() {
    return parseInt(Math.random() * 10)
}

function ajaxForm(q) {
    var formData = new FormData();
    formData.append("q", q);
    formData.append("csrfmiddlewaretoken", '{{ csrf_token }}');
    $.ajax({
        url: "/search/",
        type: 'POST',
        data: formData,
        // 告诉jQuery不要去处理发送的数据
        processData: false,
        // 告诉jQuery不要去设置Content-Type请求头
        contentType: false,
        success: function (data) {
            send("/static/images/touxiang.png", data.answer)
        }
    });
}


$(function () {
    $('.footer').on('keyup', 'input', function () {
        if ($(this).val().length > 0) {
            $(this).next().css('background', '#114F8E').prop('disabled', true);

        } else {
            $(this).next().css('background', '#ddd').prop('disabled', false);
        }
    });
    $('.footer p').click(function () {
        q = $(this).prev().val();
        show("/static/images/touxiangm.png", $(this).prev().val());
        ajaxForm(q);
    })
});

