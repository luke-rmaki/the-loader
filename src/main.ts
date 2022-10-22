import { Loader } from "./loader";

if (!customElements.get('the-loader')) {
  window.customElements.define('the-loader', Loader);
}
