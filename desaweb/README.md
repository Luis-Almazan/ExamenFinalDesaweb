Ejemplos
Creacion de cliente 

peticion post 
http://localhost:3000/api/Clientes

{
"name": "Luis",
"apellido": "Almazan",
"genero":1,
"fecha_nacimiento":"02/11/2024",
"estatus": 1,
"usuario_creador": "op_system",
"status_info": "Activo"
}


peticion get
obtener clientes por fecha de creacion y apellidos.
 
http://localhost:3000/api/ListadoGeneral 