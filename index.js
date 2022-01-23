// function countrylist(){
    
//   alert('clicked')
//     const select = document.querySelector('select');
//     let input = document.querySelector('input')

    
//   fetch('http://restcountries.eu/rest/v2/all').then(res => {
//     return res.json();
//   }).then(data => {
//       data.forEach(country => {
//           console.log(country.name);
//       })
   
//   }).catch(err => {
//     console.log(err);
//   })
// }

// document.querySelector('#country').addEventListener('click',countrylist);

function listofunivercities(){
    alert('loaded')
    fetch("http://universities.hipolabs.com/search?country={country_name}")
    .then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
    })
}

window.addEventListener('load', listofunivercities);