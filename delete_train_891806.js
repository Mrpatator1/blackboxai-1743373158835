// Charger les trains depuis le localStorage
const trains = JSON.parse(localStorage.getItem('trains') || '[]');

// Filtrer pour supprimer le train 891 806
const initialCount = trains.length;
const filteredTrains = trains.filter(train => train.number !== '891 806');
const deletedCount = initialCount - filteredTrains.length;

// Sauvegarder les modifications
localStorage.setItem('trains', JSON.stringify(filteredTrains));

// Afficher le résultat
console.log(`${deletedCount} train(s) avec le numéro 891 806 supprimé(s)`);
alert(`${deletedCount} train(s) avec le numéro 891 806 supprimé(s)`);