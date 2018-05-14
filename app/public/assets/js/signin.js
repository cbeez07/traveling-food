$('#userClick').click(function(event) {
    event.preventDefault();
    window.location.href = '/Users/chrisbeesley/Desktop/KU BootCamp/Projects/GitTest1/traveling-food/app/views/user.hbs';
    return false;
});

$('#userClick').on('click', function() {
    console.log('hello')
})