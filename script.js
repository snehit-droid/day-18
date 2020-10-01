let myFirstPromise = new Promise((resolve, reject) => {
    var request = new XMLHttpRequest()
    var url_string = 'https://restcountries.eu/rest/v2/all';
    
    request.open('GET',url_string , true) 
    request.send();

    request.onload = function (){
        if(this.status == 200){
            var d = JSON.parse(this.response)
            resolve(d)
        }
        else{
            reject("UNABLE to read data")
        }
    }

  }) 
  
  myFirstPromise
  .then(function(data){
    console.log(data)
    var name; var capital; var region; var flag; var latlang; var currency;
    for(i=0;i<data.length;i++){
        if(data[i].name){
            name = data[i].name;
        } else{
            name = '****';
        }
        if(data[i].capital){
            capital = data[i].capital;
        } else{
            capital = '****';
        }
        if(data[i].flag){
            flag = data[i].flag;
        } else{
            flag = '****';
        }
        if(data[i].region){
            region = data[i].region;
        } else{
            region = '****';
        }
        if(data[i].latlng){
            latlang = data[i].latlng;
        } else{
            latlang = '****';
        }

        if(data[i].currencies[0].name){
            currency = data[i].currencies[0].name;
        } else{
            currency = '****';
        }

    Card(name, capital, region, flag, latlang, currency)    
    
    }

  })
  .catch(function(error){
    console.log(error);
  });


  var cont = document.createElement('div');
  cont.classList.add('container');
  cont.id = 'conta';

  document.body.appendChild(cont);

  function Card(name, capital, region, flag, latlang, currency){
    
    // var cont = document.createElement('div');
    // cont.classList.add('container');
    // cont.id = 'conta';

    var Ccard = document.createElement('div')
    Ccard.classList.add('card','mt-3','mstyle');
    Ccard.style.width = '18rem';

    var img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = flag;
    img.alt = name;

    var Cbody = document.createElement('div');
    Cbody.classList.add('card-body');

    var ulist = document.createElement('ul');
    ulist.classList.add('list-group', 'list-group-flush');

    var li1 = document.createElement('li');
    li1.classList.add('list-group-item');
    li1.innerHTML = name;

    var li2 = document.createElement('li');
    li2.classList.add('list-group-item');
    li2.innerHTML = capital;

    var li3 = document.createElement('li');
    li3.classList.add('list-group-item');
    li3.innerHTML = region;

    var li4 = document.createElement('li');
    li4.classList.add('list-group-item');
    li4.innerHTML = latlang;

    var li5 = document.createElement('li');
    li5.classList.add('list-group-item');
    li5.innerHTML = currency;
    
    ulist.append(li1, li2, li3, li4, li5);
    Cbody.appendChild(ulist);

    Ccard.append(img, Cbody);

    var s = document.getElementById('conta');
    s.appendChild(Ccard);

    // document.body.appendChild(cont);
  }










// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()
// var url_string = 'https://restcountries.eu/rest/v2/all';

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET',url_string , true) 
// request.send();

// request.onload = function() {
//   // Begin accessing JSON data here
// //console.log(this.response);
// var data = JSON.parse(this.response)
// console.log(data);
// }
