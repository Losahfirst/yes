const iframes = document.querySelectorAll('.video-containe iframe');
const thumbnails = document.querySelectorAll('.video-thumbnail');
const nextButton = document.getElementById('video-next-button');
let currentVideoIndex = 0;

// Fonction pour masquer toutes les vidéos sauf celle à l'index donné
function showVideoAtIndex(index) {
    iframes.forEach((iframe, i) => {
        if (i === index) {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    });
}

// Initialisation : Afficher la première vidéo, masquer les autres
showVideoAtIndex(currentVideoIndex);

// Écouteur de bouton "suivant"
nextButton.addEventListener('click', function() {
    // Masquer la vidéo actuelle
    iframes[currentVideoIndex].style.display = 'none';

    // Passer à la vidéo suivante (boucle à la première vidéo si nécessaire)
    currentVideoIndex = (currentVideoIndex + 1) % iframes.length;

    // Afficher la vidéo suivante
    showVideoAtIndex(currentVideoIndex);
});

prevButton.addEventListener('click', function() {
  // Masquer la vidéo actuelle
  iframes[currentVideoIndex].style.display = 'none';

 // Passer à la vidéo précédente (boucle à la dernière vidéo si nécessaire)
 currentVideoIndex = (currentVideoIndex - 1 + iframes.length) % iframes.length;

  // Afficher la vidéo précédente
 showVideoAtIndex(currentVideoIndex);
     });

// Écouteurs pour les miniatures
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function() {
        const index = parseInt(thumbnail.getAttribute('data-index'));
        showVideoAtIndex(index);
        currentVideoIndex = index;
    });
});

document.getElementById('talk-but').addEventListener('click', function() {
    // Remplacez 'your_page_url' par l'URL de la page à laquelle vous souhaitez aller
    window.location.href = '../talk.html'});

    document.getElementById('form').addEventListener('click', function() {
        // Remplacez 'your_page_url' par l'URL de la page à laquelle vous souhaitez aller
        window.location.href = '../talk.html/#ulo'});

      
        
           