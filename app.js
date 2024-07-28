function encriptar() {
    let texto = document.getElementById('texto').value;
    let tituloMensaje =document.getElementById('titulo__mensaje');
    let parrafo = document.getElementById('encriptado__parrafo'); 
    let muñeco =document.getElementById ('Muñeco');
    
    let textoCifrado = texto
                
                .replace(/e/gi, 'enter')
                .replace(/i/gi, 'imes')
                .replace(/a/gi, 'ai')
                .replace(/o/gi, 'ober')
                .replace(/u/gi, 'ufat')

    if (texto.length !=0) {
        document.getElementById('texto').value=textoCifrado;
        tituloMensaje.textContent='Texto encriptado con éxito';
        parrafo.textContent=' ';
    }else{
        muñeco.src='./img/Muñeco.png';
        tituloMensaje.textContent = 'Ningún mensaje fue encontrado';
        parrafo.textContent='Ingresa el texto que desees encriptar o desencriptar.';
        Swal.fire ({
            title:'Oops!',
            icon:'error', 
            text:'Debes ingresar un texto',
        });
       
    }
}
function desencriptar() {
    let texto = document.getElementById('texto').value;
    let tituloMensaje =document.getElementById('titulo__mensaje');
    let parrafo = document.getElementById('encriptado__parrafo'); 
    let muñeco =document.getElementById ('Muñeco');  

    let textodecifrado = texto
                .replace(/enter/gi, 'e')
                .replace(/imes/gi, 'i')
                .replace(/ai/gi, 'a')
                .replace(/ober/gi, 'o')
                .replace(/ufat/gi, 'u')

    if (texto.length !=0) {
        document.getElementById('texto').value=textodecifrado;
        tituloMensaje.textContent='Texto desencriptado con éxito';
        parrafo.textContent=' ';
        
    }else{
        muñeco.src='./img/Muñeco.png';
        tituloMensaje.textContent = 'Ningún mensaje fue encontrado';
        parrafo.textContent='Ingresa el texto que desees encriptar o desencriptar.';
        Swal.fire ({
            title:'Oops!',
            icon:'error', 
            text:'Debes ingresar un texto',
        });

    }


    
}