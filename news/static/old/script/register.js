$(function () {
    var error_name = false;
    var error_password = false;
    var error_check_password = false;
    var error_email = false;
    var error_check = false;
    var error_vertify = false;


    $('#user_name').blur(function () {
        check_user_name();
    });

    $('#pwd').blur(function () {
        check_pwd();
    });

    $('#cpwd').blur(function () {
        check_cpwd();
    });

    $('#email').blur(function () {
        check_email();
    });

    $('#allow').click(function () {
        if ($(this).is(':checked')) {
            error_check = false;
            $(this).siblings('span').hide();
        }
        else {
            error_check = true;
            $(this).siblings('span').html('请勾选同意');
            $(this).siblings('span').show();
        }
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
                if (data.count >= 1) {
                    $('#user_name').next().html('用户名已存在').show();
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
            $('#pwd').next().html('密码最少4位，最长12位')
            $('#pwd').next().show();
            error_password = true;
        }
        else {
            $('#pwd').next().hide();
            error_password = false;
        }
    }


    function check_cpwd() {
        var pass = $('#pwd').val();
        var cpass = $('#cpwd').val();

        if (pass != cpass) {
            $('#cpwd').next().html('两次输入的密码不一致');
            $('#cpwd').next().show();
            error_check_password = true;
        }
        else {
            $('#cpwd').next().hide();
            error_check_password = false;
        }

    }

    function check_email() {
        var re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

        if (re.test($('#email').val())) {
            $('#email').next().hide();
            error_email = false;
        }
        else {
            $('#email').next().html('你输入的邮箱格式不正确');
            $('#email').next().show();
            error_check_password = true;
        }
    }

    function check_vertify(){
        if ($('#ticket').val() == '|'){
            $('#ticket').next().html('请点击验证');
            $('#ticket').next().show();
            error_vertify = true;
        }
        else{
            $('#ticket').next().hide();
            error_vertify = false;
        }
    }

    $("#reg_form").submit(function () {
        check_user_name();
        check_pwd();
        check_cpwd();
        check_email();
        check_vertify();

        if (error_name == false && error_password == false && error_check_password == false && error_email == false && error_check == false && error_vertify == false) {
            return true;
        }
        else {
            return false;
        }
    });
});