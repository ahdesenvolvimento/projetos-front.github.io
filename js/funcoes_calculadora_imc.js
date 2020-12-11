window.onload = function(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const calcular = document.getElementById('calcular');
    $('.border').hide();
    calcular.addEventListener('click', calcular_imc);


    function calcular_imc(){
        if (peso.value == '' || altura.value == ''){
            alert('Os campos devem está preenchidos');
        }else{
            valor_peso = parseFloat(peso.value);
            valor_altura = parseFloat(altura.value);
    
            var resultado = valor_peso/(valor_altura**2);
            if (resultado.toFixed(1) < 18.5){
                document.getElementById('significado').innerText="Peso abaixo do normal";
            }else if (resultado.toFixed(1) > 18.5 && resultado.toFixed(1) < 24.9){
                document.getElementById('significado').innerText="Peso normal";
            }else if (resultado.toFixed(1) >= 25  && resultado.toFixed(1) < 29.9){
                document.getElementById('significado').innerText="Pré-obesidade ou acima do peso";
            }else if (resultado.toFixed(1) >= 30  && resultado.toFixed(1) < 34.9){
                document.getElementById('significado').innerText="Obesidade grau um";
            }else if (resultado.toFixed(1) >= 35  && resultado.toFixed(1) < 39.9){
                document.getElementById('significado').innerText="Obesidade grau dois";
            }else if (resultado.toFixed(1) >= 40){
                document.getElementById('significado').innerText="Obesidade grau três ou obesidade mórbida";
            }
            $('.border').show();
            document.getElementById('resultado').innerText="O seu IMC é " + resultado.toFixed(2);
        
        }
    }
}

