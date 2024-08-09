import '../styles/index.css';
import DOM from './DOM/DOM.js';
import LandingPage from './components/landing.js';

function WaToDo() {
    /* Code for initializations */
    LandingPage.createComponent();
    DOM.appendContainer(LandingPage.getComponent());
};

window.addEventListener('load', () => {
    WaToDo();
});