//Busca filmes na OMDB
/*

(function () {

})();

It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created.7

*/
(function() {
  

    //var itens = document.getElementsByClassName("buscarTitulos");
    //console.log(itens);

    //Adiciona ação para cada um dos titulos listados no carrossel
    var container = document.getElementById('carrosel-lista');
    var elements = container.getElementsByTagName('img');
    //console.log(elements.length);
    for(var x = 0; x < elements.length; x++) {

        //Adiciona evento ao passar o mouse
        elements[x].onmouseover = function() {
          //alert("foco");
        }
        //Adiciona evento para o click
        elements[x].addEventListener("click",function(){

          var filme_principal = document.getElementsByClassName("filme-principal");

          //Altera o Background do filme principal
          filme_principal[0].style.backgroundImage  = "url('"+this.src+"')";
          console.log(filme_principal[0].style);
          //Pega o Título Do filme principal
          var filme_principal_titulo = filme_principal[0].children[0].children[0];
          //console.log(filme_principal_titulo);
          filme_principal_titulo.innerHTML=this.alt;
          
          //Pega Descrição do filme principal
          var filme_principal_descricao = filme_principal[0].children[0].children[1];
          filme_principal_descricao.innerHTML="Descrição alterada Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.";

          buscarTitulosPorId(null,this.id);
          
        },false); 
    }
    //Fim adição de ação para os titulos listados no carrossel


    function buscarTitulosPorId(titulo,id){
      console.clear();
      url = "http://www.omdbapi.com/?i="+ id +"&type=movie&apikey=74e576df";

      if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) { // IE
        try {
          httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
          try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          }
          catch (e) {}
        }
      }
  
      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = function () {
        console.log(httpRequest.response);
      };
      httpRequest.open('GET', url);
      httpRequest.send();
    }


    //Busca informações de filmes e séries
    function buscaTitulos(titulo) {
      console.clear();
      url = "http://www.omdbapi.com/?s="+ titulo +"&type=movie&apikey=74e576df";

      if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) { // IE
        try {
          httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
          try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
          }
          catch (e) {}
        }
      }
  
      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = function () {
        console.log(httpRequest.response);
      };
      httpRequest.open('GET', url);
      httpRequest.send();
    }
  })();