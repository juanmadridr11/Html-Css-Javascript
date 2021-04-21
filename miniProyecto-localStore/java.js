var recordatoriosSeleccionados = [];


function borrarRecordatorios(){
    if(recordatoriosSeleccionados.length > 0){
        var recordatorioExistentes = localStorage.getItem("recordatorios");
        if(recordatorioExistentes != null || recordatorioExistentes != ""){
            var recordatoriosRecuperados = JSON.parse(recordatorioExistentes);

            for(var i = 0; i < recordatoriosSeleccionados.length;i++){
                for(var j = 0; j < recordatoriosRecuperados.length; j++){
                    if(recordatoriosSeleccionados[i]==recordatoriosRecuperados[j].id){
                        recordatoriosRecuperados[j].id = -1;
                    }
                }
            }
            var recordatoriosTemporales = [];
            for( var i = 0;i<recordatoriosRecuperados.length;i++){
                if(recordatoriosRecuperados[i].id != -1){
                    recordatoriosTemporales.push(recordatoriosRecuperados[i]);
                }
            }
            if(recordatoriosTemporales.length == 0){
                localStorage.setItem("recordatorios", "");

            }
            else{
                guardarRecordatorios(recordatoriosTemporales);
            }
            
            
            mostrarRecordatorios();
            seleccionarRecordatorio();

        }
    }
       
}

function textoValido(texto){

    if(texto == null || texto == "" || texto.length < 1 ){

        return false;
    
    }
    else{

        return true;
    }
}
function mostrarError(){
    
    var html ="";
    html += '<div class = "alert alert-danger" role = "alert">';
    html += 'You must write something in the text place!';
    html += '</div>';
    
    document.getElementById('error').innerHTML = html;



}
function limpiarError(){
    
    document.getElementById('error').innerHTML ="";
    
}
function textoRecordatorio(){

    var contenido = document.getElementById("texto").value;
    
    if(!textoValido(contenido)){

        mostrarError();
        return ;
    }

    limpiarError();
    
    var referencia =  new Date();
    var id = referencia.getTime();
    var fecha = referencia.toLocaleDateString();
    var texto = contenido;
    
    var recordatorio = {"id": id, "fecha": fecha, "texto": texto};

    comprobarRecordatorio(recordatorio);
    var contenido = document.getElementById("texto").value = "";

}

function recordatorioValido(recordatorioExistentes){

    if(recordatorioExistentes==null || recordatorioExistentes=="" || 
    typeof recordatorioExistentes=="undefined" || 
    recordatorioExistentes=="undefined"){

        return false;

    }
    else{

        return true;  
    }
    
}


function comprobarRecordatorio(recordatorio){

    
    var recordatorioExistentes = localStorage.getItem("recordatorios")
    if(!recordatorioValido(recordatorioExistentes)){

        var recordatorios = [];
        recordatorios.push(recordatorio);
        guardarRecordatorios(recordatorios);
    }
    else{
        var recordatoriosRecuperados = JSON.parse(recordatorioExistentes);

        recordatoriosRecuperados.push(recordatorio);

        guardarRecordatorios(recordatoriosRecuperados);

    }
    mostrarRecordatorios();

}
function seleccionarRecordatorio(){
    
    var recordatorios = document.getElementsByClassName("recordatorio");
    for(var i =0;i<recordatorios.length;i++){
        document.getElementById(recordatorios[i].id).onclick = function(e){
            e.stopPropagation();
            if(recordatoriosSeleccionados.indexOf(this.id) == -1){
                this.style.backgroundColor = "#fa3c4c";
                recordatoriosSeleccionados.push(this.id);
            }
            else{
                this.style.backgroundColor = "#0084ffc0";
                for(var b=0;b<recordatoriosSeleccionados.length;b++){
                    if(recordatoriosSeleccionados[b] == this.id){
                        recordatoriosSeleccionados[b] = 0;

                    }
                }
            }
            var recordatoriosTemporales = [];
            for( var j = 0;j<recordatoriosSeleccionados.length;j++){
                if(recordatoriosSeleccionados[j] != 0){
                    recordatoriosTemporales.push(recordatoriosSeleccionados[j]);
                }
            }
            recordatoriosSeleccionados = recordatoriosTemporales;
        };
    }




}

function guardarRecordatorios(recordatorios){

    var recordatorioJSON = JSON.stringify(recordatorios);

    localStorage.setItem("recordatorios",recordatorioJSON);



    
}

function mostrarRecordatorios(){

    var html = "";
    var recordatorioExistentes = localStorage.getItem("recordatorios")
    if(!recordatorioValido(recordatorioExistentes)){

        html = "Now is not anything reminder";
        document.getElementById("recordatorios").innerHTML = html;

    }  
    else{

        var recordatoriosRecuperados = JSON.parse(recordatorioExistentes);
        for(var i=0;i<recordatoriosRecuperados.length;i++){

            html += formatearRecordatorio(recordatoriosRecuperados[i]);

            

        }
        document.getElementById("recordatorios").innerHTML = html;
    
    }  

}

function formatearRecordatorio(recordatorio){

    var html ="";
 
    html +='<div class="recordatorio" id = "' + recordatorio.id + '">';
    html +='<div class="row">';
    html +='<div class="col-12 text-left">';
    html +='<small class = "small1"><i class="fas fa-calendar-alt"></i> '+ recordatorio.fecha +'</small>';
    html +='</div>';
    html +='</div>';
    html +='<br>';
    html +='<div class="row">';
    html +='<div class="col-12">';
    html += recordatorio.texto;
    html +='</div>';
    html +='</div>';
    html +='</div>';
    html +='<br>';

    return html;

}

document.addEventListener('DOMContentLoaded', function(){
    
    console.log("hola");
    document.getElementById("boton1").onclick = borrarRecordatorios;
    document.getElementById("boton").onclick = textoRecordatorio;
    mostrarRecordatorios();
    seleccionarRecordatorio();
    

});
  