document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validation du formulaire
    if (thisElementsAreFilled()) {
        showConfirmationMessage('Le formulaire semble complété. Merci !');
    } else {
        alert('Veuillez remplir tous les champs obligatoires.');
    }
    
    // Supprimer le formulaire après validation
    event.target.reset();
});

function thisElementsAreFilled() {
    const requiredFields = ['nom', 'prenom', 'email'];
    if (!requiredFields.every(field => document.getElementById(field).value)) {
        return false;
    }
    return true;
}

function showConfirmationMessage(message) {
    alert(`${message}\nVeuillez attendre un message de retour de l'=?,=e serveur...`);
}