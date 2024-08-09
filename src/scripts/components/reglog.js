import regImage1 from './../../assets/peep-sitting-2.png';
import regImage2 from './../../assets/peep-sitting-6.png';
import logImage1 from './../../assets/peep-standing-27.png';
import logImage2 from './../../assets/peep-standing-18.png';
import { createEyeHidden, createEyeShown, createReturnArrowSVG } from '../SVGs.js';
import AuthorContainer from './author.js';
import DOM from '../DOM/DOM.js';
import LandingPage from './landing.js';

function RegLog() {
    let regLogContainer = document.createElement('div');
    regLogContainer.classList.add('container');
    regLogContainer.classList.add('initial');

    const createComponent = (isLogin) => createContent(isLogin, regLogContainer);
    const deleteComponent = () => regLogContainer = undefined;
    const getComponent = () => regLogContainer;

    return {
        createComponent,
        deleteComponent,
        getComponent,
    }
};

function createContent(isLogin, container) {
    const contentsContainer = document.createElement('div');
    const logoContainer = document.createElement('div');
    const returnBtn = document.createElement('button');
    const returnSVG = createReturnArrowSVG();
    const returnTitle = document.createElement('p');
    const mainSides = document.createElement('main');
    const containerBox = document.createElement('div');
    const sectionDesc = document.createElement('section');
    const imagesTitle = getImages(isLogin);
    const sectionDescTitle = document.createElement('h1');
    const sectionDescDesc = document.createElement('p');
    const form = document.createElement('form');
    const actionContainer = document.createElement('div');
    const signupBtn = document.createElement('button');
    const signupText = document.createElement('p');
    const loginOption = document.createElement('div');
    const loginText = document.createElement('p');
    const loginBtn = document.createElement('p');

    loginBtn.textContent = isLogin ? 'Sign up!' : 'Log in!';
    loginBtn.setAttribute('type', 'button');
    loginBtn.setAttribute('id', 'login');

    loginText.textContent = isLogin ?
        'Don\'t got an account yet?' : 'Already got an account?';
    loginText.classList.add('login-text');

    loginOption.appendChild(loginText);
    loginOption.appendChild(loginBtn);
    loginOption.classList.add('login-option');

    signupText.textContent = isLogin ?
        'Log in!' : 'Create your account!';

    signupBtn.appendChild(signupText);
    signupBtn.setAttribute('type', 'button');
    signupBtn.classList.add('signup');

    actionContainer.appendChild(signupBtn);
    actionContainer.appendChild(loginOption);
    actionContainer.classList.add('action-container');

    // Create array for form elements details
    const detailsArr = [];
    const user = {
        container: 'user',
        id: 'username',
        label: 'Username',
        inputType: 'text',
        placeholder: 'Create a username',
        svg: undefined,
    };

    const password = {
        container: 'password',
        id: 'password',
        label: 'Password',
        inputType: 'password',
        placeholder: 'Create a password',
        svg: createEyeHidden(),
    };

    detailsArr.push(user);
    detailsArr.push(password);

    if (!isLogin) {
        const confirmation = {
            container: 'confirmation',
            id: 'confirmation',
            label: 'Confirm Password',
            inputType: 'password',
            placeholder: 'Create your password',
            svg: createEyeHidden(),
        };

        detailsArr.push(confirmation);
    };

    for (let iter = 0; iter < detailsArr.length; ++iter) {
        const formElementContainer = document.createElement('div');
        const formLabel = document.createElement('label');
        const formInput = document.createElement('input');
        const actionBtn = document.createElement('button');
        const svg = detailsArr[iter].svg;
        const validation = document.createElement('p');

        validation.classList.add('validation');
        validation.classList.add('d-none');

        if (svg !== undefined) {
            actionBtn.appendChild(svg);
            actionBtn.classList.add('eye');
            actionBtn.setAttribute('type', 'button');
            actionBtn.dataset.status = 'hidden';

            actionBtn.addEventListener('mouseup', () => {
                const oldEyeSVG = actionBtn.querySelector('svg');
                let newEyeSVG;

                if (actionBtn.dataset.status = 'hidden') {
                    newEyeSVG = createEyeShown();
                    actionBtn.dataset.status = 'shown';
                } else {
                    newEyeSVG = createEyeHidden();
                    actionBtn.dataset.status = 'hidden';
                }

                actionBtn.removeChild(oldEyeSVG);
                actionBtn.appendChild(newEyeSVG);
            });
        }

        formInput.placeholder = detailsArr[iter].placeholder;
        formInput.setAttribute('type', detailsArr[iter].inputType);
        formInput.setAttribute('id', detailsArr[iter].id);

        formLabel.textContent = detailsArr[iter].label;
        formLabel.setAttribute('id', detailsArr[iter].id);

        formElementContainer.appendChild(formLabel);
        formElementContainer.appendChild(formInput);
        if (svg !== undefined) {
            formElementContainer.appendChild(actionBtn);
        }
        formElementContainer.appendChild(validation);
        formElementContainer.classList.add(`${detailsArr[iter].container}-container`);

        form.appendChild(formElementContainer);
    };

    form.appendChild(actionContainer);
    form.classList.add('side');
    form.classList.add('register');

    sectionDescDesc.textContent = isLogin ?
        'Ready to create, plan, and finish your tasks?' : 'Your first step to your organized tasks!';
    sectionDescDesc.classList.add('desc');

    sectionDescTitle.textContent = isLogin ?
        'Welcome Back!' : 'Create a New Account!';
    sectionDescTitle.classList.add('title');

    for (let iter = 2; iter < imagesTitle.length; ++iter) {
        sectionDesc.appendChild(imagesTitle[iter].cloneNode());
    }


    sectionDesc.appendChild(sectionDescTitle);
    sectionDesc.appendChild(sectionDescDesc);
    sectionDesc.classList.add('side');
    sectionDesc.classList.add('description');

    containerBox.appendChild(sectionDesc);
    containerBox.appendChild(form);
    containerBox.classList.add('container-box');

    mainSides.appendChild(containerBox);
    mainSides.classList.add('container');
    mainSides.classList.add('sides');

    returnTitle.textContent = 'Return main page';
    returnTitle.classList.add('title');

    returnBtn.appendChild(returnSVG);
    returnBtn.appendChild(returnTitle);
    returnBtn.classList.add('return');
    returnBtn.setAttribute('type', 'button');

    /* EDIT THIS LATER */
    logoContainer.textContent = 'SVG LOGO SOON';
    logoContainer.classList.add('logo-container');

    const circleCount = 6;
    for (let iter = 0; iter < circleCount; ++iter) {
        const cloud = document.createElement('div');

        cloud.classList.add('cloud');
        cloud.setAttribute('id', `cloud-${iter + 1}`);

        contentsContainer.appendChild(cloud);
    };

    for (let iter = 0; iter < imagesTitle.length / 2; ++iter) {
        contentsContainer.appendChild(imagesTitle[iter].cloneNode());
    };

    contentsContainer.appendChild(logoContainer);
    contentsContainer.appendChild(returnBtn);
    contentsContainer.appendChild(mainSides);
    contentsContainer.appendChild(AuthorContainer());
    contentsContainer.classList.add('container');
    contentsContainer.classList.add('contents');

    container.appendChild(contentsContainer);
    container.classList.add('container');
    container.classList.add(
        isLogin ? 'loginpage' : 'registerpage'
    );

    // EVENT LISTENERS
    loginBtn.addEventListener('mouseup', () => {
        const reglog = RegLog();
        const oldContainer = document.querySelector('.registerpage');

        if (oldContainer === null) {
            reglog.createComponent(false);
        } else {
            reglog.createComponent(true);
        }

        const newContainer = reglog.getComponent();
        DOM.appendContainer(newContainer);
        setTimeout(() => {
            newContainer.classList.remove('initial');
            newContainer.classList.add('final');
            setTimeout(() => {
                newContainer.classList.add('noradius');
            }, 150);
        }, 1);
        setTimeout(() => {
            DOM.removeContainer(container);
        }, 350);
    });

    returnBtn.addEventListener('mouseup', () => {
        LandingPage.createComponent();
        DOM.prependContainer(LandingPage.getComponent());
        container.classList.remove('final');
        container.classList.remove('noradius');
        container.classList.add('initial');
        setTimeout(() => {
            DOM.removeContainer(container);
        }, 350);
    });
};

// Function to create images of components
function getImages(isLogin) {
    const images = [];
    if (isLogin) {
        images.push(logImage1);
        images.push(logImage2);
    } else {
        images.push(regImage1);
        images.push(regImage2);
    }

    const elements = [];

    for (let iter = 0; iter < images.length; ++iter) {
        const img = document.createElement('img');

        img.src = images[iter];
        img.setAttribute('id', `peep-${iter + 1}`);
        img.classList.add(`peep`);

        elements.push(img);

    };

    for (let iter = 0; iter < images.length; ++iter) {
        const imgTitle = document.createElement('img');

        imgTitle.src = images[iter]
        imgTitle.setAttribute('id', `peep-${iter + 1}-title`);
        imgTitle.classList.add(`peep-title`);

        elements.push(imgTitle);
    }

    return elements;
};

function eyeListeners() {

}

export default RegLog;