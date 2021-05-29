var btnSubmit = document.querySelector('button#btnSubmit');
var zipCodeField = document.querySelector('form input');
var content = document.querySelector('div#app main');

btnSubmit.addEventListener('click', function(e){
    e.preventDefault();

    var zipCode = zipCodeField.value;
    zipCode = zipCode.replace(' ', '')
                     .replace('.', '')
                     .replace('-', '')
                     .trim();

    axios
    .get('https://viacep.com.br/ws/' + zipCode + '/json/')
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    });
});