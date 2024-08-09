import { createGitHubSVG, createInstagramSVG, createTwitterSVG } from '../SVGs.js'

function AuthorContainer() {
    const authorContainer = document.createElement('section');
    const details = document.createElement('div');
    const copyright = document.createElement('p');
    const author = document.createElement('p');
    const links = document.createElement('ul');

    // Create social links
    // Create array for social links
    const socialArr = [];
    socialArr.push({
        svg: createGitHubSVG(),
        link: 'https://github.com/Poufles',
    });
    socialArr.push({
        svg: createInstagramSVG(), 
        link: 'https://www.instagram.com/poufsadev/',
    });
    socialArr.push({ 
        svg: createTwitterSVG(), 
        link: 'https://x.com/Vqliant', 
    });

    // Create list of links and its properties 
    for (let iter = 0; iter < socialArr.length; ++iter) {
        const link = document.createElement('li');
        const anchor = document.createElement('a');

        anchor.appendChild(socialArr[iter].svg);
        anchor.href = socialArr[iter].link;
        anchor.target = 'blank';

        link.appendChild(anchor);
        link.classList.add('link');
        
        links.appendChild(link);
    };

    links.classList.add('links')

    author.textContent = `@ poufsadev ${new Date().getFullYear()}`;
    author.classList.add('author');
    
    copyright.textContent = 'All Rights Reserved';
    copyright.classList.add('copyright');

    details.appendChild(copyright);
    details.appendChild(author);
    details.classList.add('details');

    authorContainer.appendChild(details);
    authorContainer.appendChild(links);
    authorContainer.classList.add('author-container');

    return authorContainer;
};

export default AuthorContainer;