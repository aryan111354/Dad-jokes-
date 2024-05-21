document.addEventListener('DOMContentLoaded', function() {
   function fetchJoke() {
     fetch('https://icanhazdadjoke.com/', {
       headers: {
         'Accept': 'application/json'
       }
     })
     .then(response => response.json())
     .then(data => {
       document.getElementById('joke').textContent = data.joke;
     })
     .catch(error => {
       document.getElementById('joke').textContent = 'Failed to load joke!';
       console.error('Error fetching joke:', error);
     });
   }
 
   document.getElementById('refresh').addEventListener('click', fetchJoke);
 
   // Fetch the first joke when the popup loads
   fetchJoke();
 });
 