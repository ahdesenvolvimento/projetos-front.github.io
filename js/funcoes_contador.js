window.onload = function(){
    const botao_um = document.getElementById('botao_um');
    const botao_dois = document.getElementById('botao_dois')
    document.getElementById('entrada').value=0;
    botao_um.addEventListener('click', increment);
    botao_dois.addEventListener('click', decrement);
    if (document.body.clientWidth < 1050){
        $('.container .header').css('width', '200');
    }else{
        $('.container .header').css('width', '177,6875');
    }
    
    function increment(){
        var valor = parseInt(document.getElementById('select').value);
        
        var valor_input = parseInt(document.getElementById('entrada').value);
       
        document.getElementById('entrada').value=valor+valor_input;
    }
    function decrement(){
        var valor = parseInt(document.getElementById('select').value);
        
        var valor_input = parseInt(document.getElementById('entrada').value);
       
        document.getElementById('entrada').value=valor_input-valor;
    }
}

document.body.onresize = function(){
    if (document.body.clientWidth < 1050){
        $('.container .header').css('width', '200');
        $('h3').css('left', '70%');
        $('input').css('left', '70%');
        $('.botao_dois').css('left', '60%').css('width', '45');
        $('.botao_um').css('left', '76%').css('width', '45');
        $('.select').css('left', '68%').css('width', '45');
    }
    else{
        $('.container .header').css('width', '177,6875');
        $('h3').css('left', '50%');
        $('input').css('left', '50%');
        $('.botao_dois').css('left', '45%').css('width', '5%');
        $('.botao_um').css('left', '55%').css('width', '5%');
        $('.select').css('left', '50%').css('width', '5%');
    }
}

