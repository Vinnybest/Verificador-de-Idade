function verificar(){
   var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente Novamente.')
    } else{
       var fsex = document.getElementsByName('redsex');
       var idade = ano - Number(fano.value);
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id' , 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if (idade >= 0 && idade < 10){
               //crianca
               img.setAttribute('src' ,'BBH.png' )
           }else if (idade < 23){
               //jovem
               img.setAttribute('src' ,'JovemH.png' )
           }else if (idade < 50){
               //adulto
               img.setAttribute('src' ,'AdultH.png' )
           }else {
               //idoso
               img.setAttribute('src' ,'IdosoH.png' )
           }
       }else if (fsex[1].checked){
           genero = 'Mulher'
           if (idade >= 0 && idade < 10){
               //crianca
               img.setAttribute('src' ,'BBM.png' )
           }else if (idade < 23){
               //jovem
               img.setAttribute('src' ,'JovemM.png' )
           }else if (idade < 50){
               //adulto
               img.setAttribute('src' ,'AdultM.png' )
           }else {
               //idoso
               img.setAttribute('src' ,'IdosaM.png' )
           }
       }
        
        res.innerHTML = `<br>Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}