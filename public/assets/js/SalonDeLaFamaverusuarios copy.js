traerTodosLosUsuarios();
function traerTodosLosUsuarios(){
    fechTraerUsuarios();
}
function fechTraerUsuarios(){
    var estado;
        var url = "/admpubdevverusuarios/traer";
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
for (var key in datos){
    string += `<tr>
    <th>${datos[key].nombre}</th>
    <td>${datos[key].message}</td>
    <td>0</td>
    </tr>`;
}
document.getElementById("tableusuar").innerHTML = string;
}