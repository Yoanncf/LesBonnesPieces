(async () => {
  // Charger les données des pièces automobiles depuis le fichier JSON
  const reponse = await fetch("pieces-autos.json");
  const pieces = await reponse.json();

  // Sélectionner la section où les fiches seront ajoutées
  const sectionFiches = document.querySelector(".fiches");

  // Pour chaque pièce, créer et ajouter une fiche à la section
  for (const article of pieces) {
    const pieceElement = document.createElement("div");
    pieceElement.className = "piece";

    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    imageElement.alt = article.nom;

    const nomElement = document.createElement("h2");
    nomElement.textContent = article.nom;

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "piece__description";
    descriptionElement.textContent = article.description
      ? `Description : ${article.description}`
      : "Description : (aucune description)";

    const prixElement = document.createElement("p");
    prixElement.className = "piece__prix";
    prixElement.textContent = `Prix : ${article.prix} € (${
      article.prix < 35 ? "€" : "€€€"
    })`;

    const categorieElement = document.createElement("p");
    categorieElement.className = "piece__categorie";
    categorieElement.textContent = article.categorie
      ? `Catégorie : ${article.categorie}`
      : "Catégorie : (aucune catégorie)";

    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.className = "piece__disponibilite";
    disponibiliteElement.textContent = article.disponibilite
      ? `Disponibilité : En stock`
      : "Disponibilité : Rupture de stock";

    pieceElement.append(
      imageElement,
      nomElement,
      descriptionElement,
      prixElement,
      categorieElement,
      disponibiliteElement
    );
    sectionFiches.appendChild(pieceElement);
  }
})();
