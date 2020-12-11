window.onload = function () {
    /*
    const input = document.querySelector('input');
    const log = document.getElementById('entrada');

    input.addEventListener('input', updateValue);
    input.addEventListener('keypress', pressionar);
    function updateValue(e) {
        log.textContent = e.target.value;
        var valor = document.getElementById('h1').innerHTML=e.target.value;
        var x = valor.indexOf('+');
        if (x != -1){
            alert('tem');
        }
        console.log(log);
    }

    function pressionar(e) {
        return e.target.value.charCode >= 48 && e.target.value.charCode <= 57;
   
    }
    */
    const resultado = document.getElementById('resultado');
    const entrada = document.getElementById('entrada');
    document.getElementById('entrada').value='0';
    document.getElementById('entrada').focus();
    resultado.addEventListener('click', calcular);
    entrada.addEventListener('keypress', pressionar_com_enter);
    entrada.addEventListener('focus', padronizar);
    
    function pressionar_com_enter(e){
        if (event.charCode == 13){
            e.preventDefault();
            calcular();
        }
        if ((event.charCode > 47 && event.charCode < 58) || event.charCode==42 || event.charCode==43 || event.charCode==45 || event.charCode==47 || event.charCode==61){
     
        }else{
          //  alert(event.charCode);
            e.preventDefault();
         //   alert('pode nao')
        }
    }

    function calcular(e){
        var valor = document.getElementById('entrada').value;
        var valor_antes = 0, valor_depois = '';
        if (valor.indexOf('+') != -1){
            if (valor.indexOf('-') != -1){
                if (valor.indexOf('+') < valor.indexOf('-')){
                    for (var i = valor.indexOf('-'); i < valor.length; i++){
                        valor_depois = valor_depois + valor[i];
                    }
                    for (var i = 0; i < valor.indexOf('-'); i++){
                        valor_antes = valor_antes + valor[i];
                    }
                    document.getElementById('entrada').value=(Number(valor_antes) + Number(valor_depois));
                }
                for (var i = valor.indexOf('-'); i < valor.indexOf('+'); i++){
                    valor_depois = valor_depois + valor[i];
                }
                for (var i = valor.indexOf('+') + 1; i < valor.length; i++){
                    valor_antes = valor_antes + valor[i];
                }
                document.getElementById('entrada').value=(Number(valor_antes) + Number(valor_depois));
            }else{
                for (var i = 0; i < valor.indexOf('+'); i++){
                    valor_antes = valor_antes + valor[i];
                }
                for (var i = valor.indexOf('+') + 1; i < valor.length; i++){
                    valor_depois = valor_depois + valor[i];
                }
                document.getElementById('entrada').value=(Number(valor_antes) + Number(valor_depois));
            }
            
        }

        else if (valor.indexOf('-') != -1){
         //   alert('Entrei -')
            if (valor.indexOf('*') != -1){
                if (valor.indexOf('*') < valor.indexOf('-')){
                    for (var i = valor.indexOf('-'); i < valor.length; i++){
                        valor_depois = valor_depois + valor[i];
                    
                    }
                    for (var i = 0; i < valor.indexOf('*'); i++){
                        valor_antes = valor_antes + valor[i];
                    
                    }
                    document.getElementById('entrada').value=(Number(valor_antes) * Number(valor_depois));
                }else{
                    for (var i = valor.indexOf('-'); i < valor.indexOf('*'); i++){
                        valor_depois = valor_depois + valor[i];
                     
                    }
                    for (var i = valor.indexOf('*') + 1; i < valor.length; i++){
                        valor_antes = valor_antes + valor[i];
    
                    }
                    document.getElementById('entrada').value=(Number(valor_antes) * Number(valor_depois));
                }
            }else if (valor.indexOf('/') != -1){
            //    alert('aqui')
                if (valor.indexOf('/') < valor.indexOf('-')){
             //       alert('if')
                    for (var i = valor.indexOf('-'); i < valor.length; i++){
                        valor_depois = valor_depois + valor[i];
                    
                    }
                    for (var i = 0; i < valor.indexOf('/'); i++){
                        valor_antes = valor_antes + valor[i];
                    
                    }
                    document.getElementById('entrada').value=(Number(valor_antes) / Number(valor_depois));
                }else{
                 //   alert('else')
                    for (var i = valor.indexOf('-'); i < valor.indexOf('/'); i++){
                        valor_depois = valor_depois + valor[i];     
                    }
                    for (var i = valor.indexOf('/') + 1; i < valor.length; i++){
                        valor_antes = valor_antes + valor[i];
                    }
                    document.getElementById('entrada').value=(Number(valor_depois) / Number(valor_antes));
                }
            }else{
              //  alert('es=lse')
                for (var i = 0; i < valor.indexOf('-'); i++){
                    valor_antes = valor_antes + valor[i];
                }
                for (var i = valor.indexOf('-'); i < valor.length; i++){
                    valor_depois = valor_depois + valor[i];
                }
                document.getElementById('entrada').value=(Number(valor_depois) + Number(valor_antes));
            }
        }

        else if (valor.indexOf('*') != -1){
        //    alert('Entrei *')
            for (var i = 0; i < valor.indexOf('*'); i++){
                valor_antes = valor_antes + valor[i];
            }
            console.log(valor_antes);   
            for (var i = valor.indexOf('*') + 1; i < valor.length; i++){  
                               
                valor_depois = valor_depois + valor[i];
                
            }
            document.getElementById('entrada').value=(Number(valor_antes) * Number(valor_depois));
        }

        else if (valor.indexOf('/') != -1){
            for (var i = 0; i < valor.indexOf('/'); i++){
                valor_antes = valor_antes + valor[i];
            }

            for (var i = valor.indexOf('/') + 1; i < valor.length; i++){
                valor_depois = valor_depois + valor[i];
            }
            document.getElementById('entrada').value=(Number(valor_antes) / Number(valor_depois));
        }
        document.getElementById('entrada').focus();
    }

};

function pegar_valor(valor){
    var x = document.getElementById('entrada').value;
    if (x != ''){
        if (valor == 'C'){
            document.getElementById('entrada').value='0'
            document.getElementById('entrada').focus();
        }else{
            document.getElementById('entrada').value=x+valor;
        }
    }else{
        document.getElementById('entrada').value=valor;
    }
}