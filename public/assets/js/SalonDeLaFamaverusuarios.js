traerTodosLosUsuarios();
function traerTodosLosUsuarios(){
    fechTraerUsuarios();
}
function fechTraerUsuarios(){
    var estado;
        var url = "/sudo/ver-usuarios/traer";
        var metodo = "get";
    
        fetch(url, {
            method: metodo,
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => imprimirUsuarios(response));
}
function imprimirUsuarios(datos){
var string = ``;
var contador = 0;
for (var key in datos){
    string += `<tr>
    <td><img style= "width: 100px; height:100px; border-radius: 50%;" src="${datos[key].imgperfil}" alt="" ></td>
<<<<<<< HEAD
    <th style="text-transform: capitalize;" >${datos[key].nombre}</th>
    <td id="message${contador++}"></td>
    <td>0</td>
    </tr> `;
=======
    <th style="text-transform: uppercase"><b>${datos[key].nombre}</b></th>
    <td id="message${contador++}" style="font-style: oblique; font-weight: 500"></td>
    <td>${datos[key].puntos}</td>
    </tr> `;  
>>>>>>> upstream/master
}

document.getElementById("tableusuar").innerHTML = string;
var contador = 0;
for (var key in datos){
    document.getElementById("message"+contador++).innerText = datos[key].message;
}

}