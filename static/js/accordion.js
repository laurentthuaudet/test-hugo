function toggleAccordion(element) {
  const content = element.nextElementSibling;
  if (content.style.maxHeight) {
    // Fermer l'accordéon
    content.style.maxHeight = null;
  } else {
    // Ouvrir l'accordéon et régler maxHeight à la hauteur de contenu
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
