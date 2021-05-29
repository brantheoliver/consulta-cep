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
        content.innerHTML = '';
        createText(response.data.logradouro + ' - ' + response.data.bairro);
        createText(response.data.localidade + '/' + response.data.uf);
    })
    .catch(function(error){
        console.log(error)
    });
});

function createText(txt){
    var paragraph = document.createElement('p');
    var text = document.createTextNode(txt);

    paragraph.appendChild(text);
    content.appendChild(paragraph);
}