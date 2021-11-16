const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const showText = (html) => {
  const Bodini = document.querySelector('#Bodini-row');
  removeAllChildNodes(Bodini);
  const BodiniEl = document.createElement('h3');
  const BodiniText = document.createTextNode(html);
  BodiniEl.appendChild(BodiniText);
  Bodini.appendChild(BodiniEl);

  const Helvetica = document.querySelector('#Helvetica-row');
  removeAllChildNodes(Helvetica);
  const HelveticaEl = document.createElement('h3');
  const HelveticaText = document.createTextNode(html);
  HelveticaEl.appendChild(HelveticaText);
  Helvetica.appendChild(HelveticaEl);

  const Futura = document.querySelector('#Futura-row');
  removeAllChildNodes(Futura);
  const FuturaEl = document.createElement('h3');
  const FuturaText = document.createTextNode(html);
  FuturaEl.appendChild(FuturaText);
  Futura.appendChild(FuturaEl);

  const Garamond = document.querySelector('#Garamond-row');
  removeAllChildNodes(Garamond);
  const GaramondEl = document.createElement('h3');
  const GaramondText = document.createTextNode(html);
  GaramondEl.appendChild(GaramondText);
  Garamond.appendChild(GaramondEl);

  const Biotif = document.querySelector('#Biotif-row');
  removeAllChildNodes(Biotif);
  const BiotifEl = document.createElement('h3');
  const BiotifText = document.createTextNode(html);
  BiotifEl.appendChild(BiotifText);
  Biotif.appendChild(BiotifEl);
};

module.exports = showText;
