constnumeroSenha= document.querySelector('parametro-senha_texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const letrasMaíscula="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
c0nstletrasMinusculas="abcdefghijklmnopqrstuvwxyz"
constnumero="0123456789";
constsimbolo='!%@*?;'
constbotoes=document.querySelectorAll;('.parametro-senha_botao');
constcampoSenha=document.querySelector('#camoo-senha');
constcheckbox= document.querySelectorAll('.checkbox');
constforcaSenha=Document.querySelector('forca');

botoes[0].onclick=diminuiTamanho;
botoes[1].onclick=aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha>1){
        //tamanhosenha=tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent=tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha<20){
        //tamanhoSenha=tamanhoSenha=1;
        tamanhoSenha++;
    }
    numeroSenha.textContent=tamanhoSenha;
    geraSenha();

}
for(i=0;i<constcheckbox.length;i++){
    checkbox[i].onclick=geraSenha;
}
geraSenha();

function geraSenha(){
    let alfabeto='';
    if(checkbox[0].checked){
        alfabeto=alfabeto+letrasMaíscula;
    }
    if(checkbox[1].checked){
        alfabeto=alfabeto=letraminusculas;
    }
    if(checkbox[2].checked){
        alfabeto=alfabeto+numeroSenha;
    }
    if(checkbox[3].checked){
        alfabeto=alfabeto+simbolos;
    }
}

