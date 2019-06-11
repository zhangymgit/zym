$(function () {
    var error_name = false;
    var error_password = false;
    var error_vertify = false;

    $('#user_name').blur(function () {
        check_user_name();
    });

    $('#pwd').blur(function () {
        check_pwd();
    });

    function check_user_name() {
        var len = $('#user_name').val().length;
        if (len < 2 || len > 12) {
            $('#user_name').next().html('请输入2-12个字符的用户名')
            $('#user_name').next().show();
            error_name = true;
        }
        else {
            $.get('/user_register_exist/?uname=' + $('#user_name').val(), function (data) {
                if (data.count == 0) {
                    $('#user_name').next().html('用户名不存在').show();
                    error_name = true;
                }
                else {
                    $('#user_name').next().hide();
                    error_name = false;
                }
            });
        }
    }

    function check_pwd() {
        var len = $('#pwd').val().length;
        if (len < 4 || len > 12) {
            $('#pwd').next().html('密码最少4位，最长20位')
            $('#pwd').next().show();
            error_password = true;
        }
        else if (len == 0) {
            $('#pwd').next().html('请输入密码')
            $('#pwd').next().show();
            error_password = true;
        }
        else {
            $('#pwd').next().hide();
            error_password = false;
        }
    }

    function check_vertify() {
        if ($('#ticket').val() == '|') {
            $('#ticket').next().show();
            error_vertify = true;
        }
        else {
            $('#ticket').next().hide();
            error_vertify = false;
        }
    }

    $('#login_form').submit(function () {
        check_user_name();
        check_vertify();
		console.log(error_vertify);
        if (error_name == false && error_password == false && error_vertify == false) {
			console.log(111111);
            return true
        }
        else {
            return false
        }
    });
});