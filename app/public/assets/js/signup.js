(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();



$(document).ready(function() {
    $('#userClick-3').on('click', function () {
        console.log('hello');
        window.location.href = '/user';
        return false;

    })
    $('#signIn').on('click', function() {
        window.location.href = '/signin';
        return false;
    })

    $('.signupSubmit').on('click', function () {
        let userName = $('#validationCustom04');
        let restaurantName = $('#validationCustom06');
        let userEmail = $('#validationCustom01');

        locationPost({
            userid: userName
                .val()
                .trim(),
            location_name: restaurantName
                .val()
                .trim(),
            place_id: userName
                .val()
                .trim(),
            OwnerIdUserid: userName
                .val()
                .trim()
        });

        ownerPost({
            userid: userName
                .val()
                .trim(),
            email: userEmail
                .val()
                .trim()
        })
    });

    function ownerPost(ownerData) {
        $.post('/api/OwnerIds', ownerData)
    };
    
    function locationPost(locationData) {
        $.post('/api/LocationIds', locationData)
    };
});