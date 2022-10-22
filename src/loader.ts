const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>
  :host {
    --gray: #36454f;
    --inner-1: #f88379;
    --inner-2: #fbe5c0;
    --inner-3: #d0e6f0; 
  }
  
  body {
    height: 100vh;
    width: 100vw;
  }

div {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--gray);
  opacity: 0.7;
}

span.circle {
  border-radius: 100%;
  position: absolute;
}

[data-circle="1"] {
  height: 100px;
  width: 100px;
  border-top: 3px solid var(--inner-1);
  animation: rotateLeft 1s infinite linear;
}

[data-circle="2"] {
  height: 90px;
  width: 90px;
  border-bottom: 3px solid var(--inner-2);
  animation: rotateRight 1s infinite linear;
}

[data-circle="3"] {
  height: 80px;
  width: 80px;
  border-bottom: 3px solid var(--inner-3);
  animation: rotateLeft 1s infinite linear;
}

@keyframes rotateLeft {
  from {
    transform: rotatez(0deg);
  }
  to {
    transform: rotatez(364deg);
  }
}

@keyframes rotateRight {
  from {
    transform: rotatez(0deg);
  }
  to {
    transform: rotatez(-364deg);
  }
}

  </style>
<div>
  <span class="circle" data-circle="1"></span>
  <span class="circle" data-circle="2"></span>
  <span class="circle" data-circle="3"></span>
</div>
`

export class Loader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot?.appendChild(template.content)
  }
}
