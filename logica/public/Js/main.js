window.onload=()=>{
    document.getElementById('BtnEnviar').addEventListener('click',Enviar);
}


function Enviar(e){
  e.preventDefault();
  let xhr=new XMLHttpRequest();
  xhr.onreadystatechange=()=>{
      if(xhr.readyState==4 && xhr.status==200){
          let respuesta=JSON.parse(xhr.responseText);
        
      }
  }
  let Nombre=document.getElementById('TxtNombre').value;
  let Apellido=document.getElementById('TxtApellido').value;
  xhr.open('POST','/addUser',true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({nombre:Nombre,apellido:Apellido}));
  


}