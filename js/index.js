// Obtener el listado de contactos de la agenda
$.getJSON("http://www.raydelto.org/agenda.php", function(data) {
  // Iterar sobre los contactos y agregarlos a la lista
  $.each(data, function(i, contact) {
    var listItem = "<li>" + contact.nombre + " " + contact.apellido + " (" + contact.telefono + ")" + "</li>";
    $("#contact-list").append(listItem);
  });
});

// Agregar un nuevo contacto a la agenda
$("#add-contact-form").submit(function(event) {
  event.preventDefault();
  var nombre = $("#nombre").val();
  var apellido = $("#apellido").val();
  var telefono = $("#telefono").val();
  var newContact = {
    "nombre": nombre,
    "apellido": apellido,
    "telefono": telefono
  };
  $.post("http://www.raydelto.org/agenda.php", JSON.stringify(newContact), function(data) {
    // Agregar el nuevo contacto a la lista
    var listItem = "<li>" + nombre + " " + apellido + " (" + telefono + ")" + "</li>";
    $("#contact-list").append(listItem);
    // Limpiar los campos del formulario
    $("#nombre").val("");
    $("#apellido").val("");
    $("#telefono").val("");
  }, "json");
});
