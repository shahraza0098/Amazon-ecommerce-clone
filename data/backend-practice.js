const xhr=new XMLHttpRequest;

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();




function errorHandling() {

  const xhr=new XMLHttpRequest;

  xhr.addEventListener('load', () => {
    console.log(xhr.response);
  });

  //Error handling while send and reciving 
  xhr.addEventListener('error', (error) => {
    console.log('unexpected error');
  });

  xhr.open('GET', 'https://error.supersimplebackend.dev');
  xhr.send();
}
errorHandling();