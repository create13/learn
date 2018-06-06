
$(function(){
    /*生成验证码*/
    create_code();

    //登录页面的提示文字
    //账户输入框失去焦点
    (function login_validate(){
        $("#userName").blur(function(){
            if( $(this).val() == ""|| $(this).val() == NULL)
            {
                $(this).next().html("账号不能为空！");
                $(this).next().css("display","block");
                $("#logBtn").prop('disabled', true);
            }
            else{
          	 $(this).next().html("啦啦啦");
            }

        });
        /*密码输入框失去焦点*/
        $("#passWord").blur(function(){
            if($(this).val() == ""){
                $(this).next().html("密码不能为空！");
                $(this).next().css("display","block");
                $("#logBtn").prop('disabled', true);
                
            }
            else {
                $("#logBtn").prop('disabled', false);
                $(this).next().empty();
            }
        });

        /*验证码输入框失去焦点*/
        $("#keySafe").blur(function(){
            var code1=$('#keySafe').val().toLowerCase();
            var code2=$(".yzm .phoKey").text().toLowerCase();
            if(code1!=code2)
            {
                $(this).parent().next().html("验证码输入错误!!!");
                $(this).next().next().css("display","block");
                $("#logBtn").prop('disabled', true);
            }
            else
            {
                $("#logBtn").prop('disabled', false);
                $(this).next().next().empty();
            }
        })
    })();
    $("#logBtn").click(function(){
    	var userName=$("#userName").val();
    	var pass=$("#passWord").val();
    	var keysafe=$("#keySafe").val();
    	if(isEmail(userName)==true){
    		alert("aaa");
    	}
    	else{
    		window.location.href="aaaaa.html"
    	}
    })
});


//生成验证码的函数
function create_code() {
    function shuffle() {
        var arr = ['1', 'r', 'Q', '4', 'S', '6', 'w', 'u', 'D', 'I', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', '2', 's', 't', '8', 'v', '7', 'x', 'y', 'z', 'A', 'B', 'C', '9', 'E', 'F', 'G', 'H', '0', 'J', 'K', 'L', 'M', 'N', 'O', 'P', '3', 'R',
            '5', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        return arr.sort(function () {
            return (Math.random() - .5);
        });
    };
    shuffle();
    function show_code() {
        var ar1 = '';
        var code = shuffle();
        for (var i = 0; i < 6; i++) {
            ar1 += code[i];
        }

        $(".yzm .phoKey").text(ar1);
    };
    show_code();
    $(".yzm .phoKey").click(function () {
        show_code();
    });
}
/*检验邮箱*/
function isEmail(str){ 
var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
return reg.test(str); 
} 