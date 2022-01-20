$('#btnCargar').click(function() {

    var esperar = 2000;
    $.ajax({

        url: "calificaciones.html",
        beforeSend: function () {
            $('#contenido').text('Cargando...');

        },

        success: function(data) {
            setTimeout(function() {
                $('#contenido').html(data);
            }, esperar
            );
        }


    });

});