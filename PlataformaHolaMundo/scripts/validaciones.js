function validarForma(forma) {
    //Validamos el usuario
    var nombre = forma.nombre;
    if (nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) || nombre.value.match==(/[a-zA-Z]/) || nombre.value == "Escribe tu nombre") {
        alert("Usted debe proporcionar un nombre que sea correcto");
        nombre.focus();
        nombre.select();
        return false;
    }
    
    var apellidos = forma.apellidos;
    
    if (apellidos.value == "" || apellidos.value.length == 0 || /^\s+$/.test(apellidos.value) || apellidos.value == "Escribe tus apellidos") {
        alert("Usted debe proporcionar unos apellidos que sean correctos");
        apellidos.focus();
        apellidos.select();
        return false;
    }
    
    var telefono = forma.telefono;
    if ( telefono.value == null || telefono.value.length == 0 || /^\s+$/.test(telefono.value) || !(/^\d{10}$/.test(telefono.value)) || telefono.value == "Escribe tu telefono") {
        alert("Usted debe proporcionar un número telefonico correcto");
        telefono.focus();
        telefono.select();
        return false;
    }
     var email = forma.email;
    if ( email.value == null || email.value.length == 0 || /^\s+$/.test(email.value) || !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) || email.value == "Escribe tu email") {
        alert("Usted debe proporcionar un email correcto");
        email.focus();
        email.select();
        return false;
    }
    
    var username = forma.username;
    if (username.value == null || username.value.length == 0 || /^\s+$/.test(username.value) || username.value.match==(/[a-zA-Z]/) || username.value == "Escribe tu usuario") {
        alert("Usted debe proporcionar un usuario que sea correcto");
        username.focus();
        username.select();
        return false;
    }
    
      var password = forma.password;
    if (password.value == null || password.value.length == 0 || /^\s+$/.test(password.value)) {
        alert("Usted debe proporcionar un password que sea correcto");
        username.focus();
        username.select();
        return false;
    }
    

    //Formulario validado
    alert("Formulario valido, enviando datos...");
    return true;
}
