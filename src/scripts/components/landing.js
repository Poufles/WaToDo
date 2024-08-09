import DOM from '../DOM/DOM.js';
import landingPeep from './../../assets/peep-sitting-12.png';
import AuthorContainer from './author';
import RegLog from './reglog.js';

const LandingPage = function () {
    let landingContainer = document.createElement('div');
    landingContainer.classList.add('container');
    landingContainer.classList.add('landing');

    const createComponent = () => createContent(landingContainer);
    const deleteComponent = () => {
        landingContainer = document.createElement('div');
        landingContainer.classList.add('container');
        landingContainer.classList.add('landing');
    };
    const getComponent = () => landingContainer;

    return {
        createComponent,
        deleteComponent,
        getComponent,
    };
}();

function createContent(container) {
    const img = document.createElement('img');
    const contentsContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const mainContainer = document.createElement('main');
    const textDetails = document.createElement('div');
    const textTitle = document.createElement('h1');
    const textDesc = document.createElement('p');
    const actionContainer = document.createElement('div');
    const registerBtn = document.createElement('button');
    const loginOption = document.createElement('div');
    const loginText = document.createElement('p');
    const loginBtn = document.createElement('button');

    loginBtn.textContent = 'Log in!';
    loginBtn.setAttribute('type', 'button');
    loginBtn.setAttribute('id', 'login');

    loginText.textContent = 'Already got an account?';
    loginText.classList.add('login-text');

    loginOption.appendChild(loginText);
    loginOption.appendChild(loginBtn);
    loginOption.classList.add('login-option');

    registerBtn.textContent = 'Sign Up';
    registerBtn.setAttribute('type', 'button');
    registerBtn.setAttribute('id', 'register');

    actionContainer.appendChild(registerBtn);
    actionContainer.appendChild(loginOption);
    actionContainer.classList.add('action-container');

    textDesc.textContent = 'Your personal tool organizer to create and plan what to do!';
    textDesc.classList.add('desc');

    textTitle.textContent = 'WaToDo';
    textTitle.classList.add('title');

    textDetails.appendChild(textTitle);
    textDetails.appendChild(textDesc);
    textDetails.classList.add('text-details');

    mainContainer.appendChild(textDetails);
    mainContainer.appendChild(actionContainer);
    mainContainer.classList.add('container');
    mainContainer.classList.add('landing-action');

    /* EDIT THIS LATER */
    logoContainer.textContent = 'SVG LOGO SOON';
    logoContainer.classList.add('logo-container');
    /* EDIT THIS LATER */

    contentsContainer.appendChild(logoContainer);
    contentsContainer.appendChild(mainContainer);
    contentsContainer.appendChild(AuthorContainer());
    contentsContainer.classList.add('container');
    contentsContainer.classList.add('contents');

    img.src = landingPeep;

    const circleCount = 4;
    for (let iter = 0; iter < circleCount; ++iter) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.setAttribute('id', `circle-${iter + 1}`);

        container.appendChild(circle);
    };

    container.appendChild(img);
    container.appendChild(contentsContainer);

    // EVENT LISTENERS
    registerBtn.addEventListener('mouseup', () => {
        const regLog = RegLog();
        regLog.createComponent(false);

        const regLogContainer = regLog.getComponent();
        DOM.appendContainer(regLogContainer);
        setTimeout(() => {
            regLogContainer.classList.remove('initial');
            regLogContainer.classList.add('final');
            setTimeout(() => {
                regLogContainer.classList.add('noradius');
            }, 150);
        }, 1);
        setTimeout(() => {
            DOM.removeContainer(LandingPage.getComponent());
            LandingPage.deleteComponent();
        }, 350);
    });

    loginBtn.addEventListener('mouseup', () => {
        const regLog = RegLog();
        regLog.createComponent(true);

        const regLogContainer = regLog.getComponent();
        DOM.appendContainer(regLogContainer);
        setTimeout(() => {
            regLogContainer.classList.remove('initial');
            regLogContainer.classList.add('final');
            setTimeout(() => {
                regLogContainer.classList.add('noradius');
            }, 150);
        }, 1);
        setTimeout(() => {
            DOM.removeContainer(LandingPage.getComponent());
            LandingPage.deleteComponent();
        }, 350);
    });
};

export default LandingPage;