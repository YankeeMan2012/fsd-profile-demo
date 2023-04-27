const createLegend = () => {
  const legend = document.createElement('div');
  legend.innerHTML = `<div class="fsd-legend">
    <ul class="fsd-legend-list">
      <li class="app">App</li>
      <li class="process">Process</li>
      <li class="page">Page</li>
      <li class="widget">Widget</li>
      <li class="feature">Feature</li>
      <li class="entity">Entity</li>
      <li class="shared">Shared</li>
    </ul>
    <button class="fsd-legend-toggle" type="button" id="fsd-legend-toggle">Toggle Legend</button>
    <style>
      .fsd-legend {
        display: block;
        position: fixed;
        right: 0;
        bottom: 0;
        font-size: 18px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: white;
        background: white;
        padding: 20px;
        box-shadow: 0 0 5px #ccc;
        border-top-left-radius: 20px;
      }

      .fsd-legend-list {
        margin: 0;
        padding: 0;
        display: none;
        list-style-type: none;
      }

      .fsd-legend .fsd-legend-list li {
        padding: 5px 30px;
        margin: 0;
      }

      .legend .fsd-legend-list {
        display: block;
      }

      .legend .app {
        background: #ad4e4e;
        border: 5px solid #ad0000;
        padding: 10px;
        margin: 10px;
      }

      .legend .process {
        background: #a87048;
        border: 5px solid #ad4800;
        padding: 10px;
        margin: 10px;
      }

      .legend .page {
        background: #ada258;
        border: 5px solid #ad9600;
        padding: 10px;
        margin: 10px;
      }

      .legend .widget {
        background: #68b060;
        border: 5px solid #11ad00;
        padding: 10px;
        margin: 10px;
      }

      .legend .feature {
        background: #72b7ac;
        border: 5px solid #00b99d;
        padding: 10px;
        margin: 10px;
      }

      .legend .entity {
        background: #3c3cb7;
        border: 5px solid #0000b9;
        padding: 10px;
        margin: 10px;
      }

      .legend .shared {
        background: #814381;
        border: 5px solid purple;
        padding: 10px;
        margin: 10px;
        color: white;
      }
    </style>
  </div>`;
  document.body.appendChild(legend);
};

const setupListeners = () => {
  const btn = document.querySelector('#fsd-legend-toggle');
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('legend');
  });
};

const onInit = () => {
  createLegend();
  setupListeners();
};

onInit();
