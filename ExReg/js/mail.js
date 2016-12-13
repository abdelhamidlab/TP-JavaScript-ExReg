var button = document.querySelector('button');
button.addEventListener('click',replaceReg);

function replaceReg() {
    var reg = document.querySelector('#reg').value;
    var search = document.querySelector('#search').value;
    var txt = document.querySelector('#string').value;
    var op = document.querySelectorAll('input[name="op"]');
    var newtxt = '';
    if(op[0].checked == true && op[1].checked == false){
        //reg G
        var regex = new RegExp(reg,'g');
    }else if(op[0].checked == false && op[1].checked == true){
        //reg I
        var regex = new RegExp(reg,'i');
    }else if(op[0].checked == true && op[1].checked == true){
        //reg G & I
        var regex = new RegExp(reg,'gi');
    }else{
        var regex = new RegExp(reg);
    }
    newtxt = txt.replace(regex,search);
    document.querySelector('#string').value = newtxt;
    console.log(txt);
}