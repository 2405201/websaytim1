


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let searchQuery = document.querySelector('input[type="text"]').value;
    let priceRange = document.querySelector('input[type="number"]').value;
    
    console.log('Qidiruv:', searchQuery, 'Narx:', priceRange);

  });
