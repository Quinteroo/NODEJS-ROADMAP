


//! HANDLING ASYNC ERROR
//? Manejar errores en código asíncrono. En callbacks, promesas o async/await, los errores 
//? no se manejan igual que en código sincrónico.


//! Con promesas:
doSomething()
  .then(result => console.log(result))
  .catch(err => console.error('Error:', err));



//! Con async/await:
try {
  const data = await doSomething();
} catch (error) {
  console.error('Error:', error);
}


//!En callbacks 
//siempre debes pasar el error como primer argumento:
fs.readFile('file.txt', (err, data) => {
  if (err) return console.error(err);
});
