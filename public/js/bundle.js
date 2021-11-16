(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/showText.js
  var require_showText = __commonJS({
    "src/showText.js"(exports, module) {
      var removeAllChildNodes = (parent) => {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      };
      var showText2 = (html) => {
        const Bodini = document.querySelector("#Bodini-row");
        removeAllChildNodes(Bodini);
        const BodiniEl = document.createElement("h3");
        const BodiniText = document.createTextNode(html);
        BodiniEl.appendChild(BodiniText);
        Bodini.appendChild(BodiniEl);
        const Helvetica = document.querySelector("#Helvetica-row");
        removeAllChildNodes(Helvetica);
        const HelveticaEl = document.createElement("h3");
        const HelveticaText = document.createTextNode(html);
        HelveticaEl.appendChild(HelveticaText);
        Helvetica.appendChild(HelveticaEl);
        const Futura = document.querySelector("#Futura-row");
        removeAllChildNodes(Futura);
        const FuturaEl = document.createElement("h3");
        const FuturaText = document.createTextNode(html);
        FuturaEl.appendChild(FuturaText);
        Futura.appendChild(FuturaEl);
        const Garamond = document.querySelector("#Garamond-row");
        removeAllChildNodes(Garamond);
        const GaramondEl = document.createElement("h3");
        const GaramondText = document.createTextNode(html);
        GaramondEl.appendChild(GaramondText);
        Garamond.appendChild(GaramondEl);
        const Biotif = document.querySelector("#Biotif-row");
        removeAllChildNodes(Biotif);
        const BiotifEl = document.createElement("h3");
        const BiotifText = document.createTextNode(html);
        BiotifEl.appendChild(BiotifText);
        Biotif.appendChild(BiotifEl);
      };
      module.exports = showText2;
    }
  });

  // index.js
  var showText = require_showText();
  var input = document.querySelector("#text-input");
  var button = document.querySelector("#trigger-btn");
  button.addEventListener("click", () => {
    console.log("click");
    let html = input.value;
    return showText(html);
  });
})();
