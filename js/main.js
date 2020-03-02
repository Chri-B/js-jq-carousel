$(document).ready(function() {

    // Invoco le funzioni per cambiare slide
    var nextResidui = 8; // passaggi di immagine residui (ogni giro completo equivale a 4 passaggi)
    var clock = setInterval(giriResidui, 2000);

    // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva
    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);

    // controllo scorrimento immagini al mouseenter (pausa) e mouseleave (riprendi e termina nextResidui)
    $('.images').mouseenter(function() {
        clearInterval(clock);
    });
    $('.images').mouseleave(function() {
        clock = setInterval(giriResidui, 2000);
    });

    // attivazione pulsanti pausa e riprendi e "animazione" pulsante
    $('#play').click(function() {
        clock = setInterval(giriResidui, 2000);
        $('#pause').removeClass('clicked');
        $(this).addClass('clicked');
    });
    $('#pause').click(function() {
        clearInterval(clock);
        $('#play').removeClass('clicked');
        $('#pause').addClass('clicked');
    });

    // click pallino per andare a slide corrispondente !!così vado a sballare lo slide immagini che non finirà più alla prima!!
    $('.fa-circle.first').click(function() {
        $('.images img').removeClass('active');
        $('.images img.first').addClass('active');
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.first').addClass('active');
    })
    $('.fa-circle.second').click(function() {
        $('.images img').removeClass('active');
        $('.images img.second').addClass('active');
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.second').addClass('active');
    })
    $('.fa-circle.third').click(function() {
        $('.images img').removeClass('active');
        $('.images img.third').addClass('active');
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.third').addClass('active');
    })
    $('.fa-circle.last').click(function() {
        $('.images img').removeClass('active');
        $('.images img.last').addClass('active');
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.last').addClass('active');
    })



    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    };

    function prevSlide() {
            // imgAttiva e prossimaImg: dico che la mia immagine attiva è quella con l'active,
            // mentre la prossima immagine è l'elemento successivo appena selezionato con 'immagine attiva'

            // creo ciclo IF per gestire ciclo 'infinito' di slideshow
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imgAttiva = $('.images img.active');
            var prossimaImg = imgAttiva.prev();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    };

    function giriResidui() {
        if (nextResidui === 0) { // quando i nextResidui (impostati a inizio codice) si esauriscono, termina la sequenza immagini
            clearInterval(clock);
            $('#play').removeClass('clicked'); // alla fine del giro di nextResidui 'oscuro' il pulsante play.
        } else {
            nextSlide();
            nextResidui --;
        }
    }
});
