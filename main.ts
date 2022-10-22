import { Loader } from "./src/loader";

if (!customElements.get('the-loader')) {
  window.customElements.define('the-loader', Loader);
}
