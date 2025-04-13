var login=document.getElementById("login");
login.addEventListener("click",function(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="nihal"&&password=="12345")
    {
    var loginArea=document.getElementById("login-area")
    loginArea.style.display="none";
    var tArea=document.getElementById("transaction")
    tArea.style.display="block";
    }
    else
    {
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        setTimeout(()=>{
            alert("wrong username or password");},10
        )
    }
})

var deposit=document.getElementById("deposit");
deposit.addEventListener("click",function(){
    var dAmount=document.getElementById("dAmount");
    var d_amount=parseFloat(dAmount.value);
    var crAmount=document.getElementById("dep").innerText;
   var c_amount=parseFloat(crAmount);
    var total_amount=c_amount+d_amount;
    c_amount=total_amount;
    document.getElementById("dep").innerText=total_amount;
    document.getElementById("dAmount").value="";


    var total_sum =document.getElementById("money").innerText;
    t_sum=parseFloat(total_sum);
   
    var final_balance=t_sum+d_amount;
    document.getElementById("money").innerText=final_balance;

})
var withdraw=document.getElementById("withdraw");
withdraw.addEventListener("click",function(){
    var wAmount=document.getElementById("wAmount");
    var w_amount=parseFloat(wAmount.value);


    var total_withdraw=document.getElementById("wit").innerText;
   var t_withdraw=parseFloat(total_withdraw);
    var total_withdraw_amount=t_withdraw+w_amount;
    t_withdraw=total_withdraw_amount;
    document.getElementById("wit").innerText=total_withdraw_amount;
    document.getElementById("wAmount").value="";


    var total_sum =document.getElementById("money").innerText;
    t_sum=parseFloat(total_sum);

    var final_balance=t_sum-w_amount;
    document.getElementById("money").innerText=final_balance;
    
})
