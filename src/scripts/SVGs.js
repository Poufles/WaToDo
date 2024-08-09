function createGitHubSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    // Create svg attribute(s) and clas(es)
    svg.setAttribute("id", "Layer_1");
    svg.setAttribute("style", "enable-background:new 0 0 32 32");
    svg.setAttribute('viewBox', '0 0 32 32');

    // Create path 1
    path1.classList.add('st0');
    path1.setAttribute('clip-rule', 'evenodd');
    path1.setAttribute('fill-rule', 'evenodd');
    path1.setAttribute('d', 'M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z');

    // Append paths to svg
    svg.appendChild(path1);

    return svg;
}

function createInstagramSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

    // Create svg attribute(s) and clas(es)
    svg.setAttribute("id", "Layer_1");
    svg.setAttribute("style", "enable-background:new 0 0 56.7 56.7");
    svg.setAttribute('viewBox', '0 0 56.7 56.7');

    // Create path 1
    path1.setAttribute('d', 'M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z');

    // Create circle
    circle.setAttribute('cx', '41.5');
    circle.setAttribute('cy', '16.4');
    circle.setAttribute('r', '2.9');

    // Create path 2
    path2.setAttribute('d', 'M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z');

    // Append paths to svg
    svg.appendChild(path1);
    svg.appendChild(circle);
    svg.appendChild(path2);

    return svg;
}

function createTwitterSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0.254 0.25 500 451.95400000000006');

    // Create path 1
    path1.setAttribute('d', 'M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z');

    // Append paths to svg
    svg.appendChild(path1);

    return svg;
};


function createEyeShown() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 96 96');

    // Create path 1
    path1.setAttribute('d', 'M94.9936,44.6718C83.6788,27.7025,70.155,11.9989,48,11.9989S12.3212,27.7025,1.0064,44.6718a6.0063,6.0063,0,0,0,0,6.6564C12.3212,68.2975,25.845,84.0011,48,84.0011S83.6788,68.2975,94.9936,51.3282A6.0063,6.0063,0,0,0,94.9936,44.6718ZM48,72.0007C35.2672,72.0007,25.3294,65.21,13.2646,48,25.3294,30.7905,35.2672,23.9993,48,23.9993S70.6706,30.7905,82.7354,48C70.6706,65.21,60.7328,72.0007,48,72.0007Z');

    // Create path 2
    path2.setAttribute('d', 'M48,36A12,12,0,1,0,60,48,12.0161,12.0161,0,0,0,48,36Z');

    // Append paths to svg
    svg.appendChild(path1);
    svg.appendChild(path2);

    return svg;
};


function createEyeHidden() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 96 96');

    // Create path 1
    path1.setAttribute('d', 'M82.24,22.2438A5.999,5.999,0,1,0,73.7562,13.76L69.455,18.0612A41.15,41.15,0,0,0,48,12.0022c-22.1588,0-35.6814,15.7022-46.9893,32.67a5.9842,5.9842,0,0,0,0,6.6558,110.6522,110.6522,0,0,0,15.8105,19.367L13.76,73.7562A5.999,5.999,0,1,0,22.2438,82.24ZM13.2677,48C25.3256,30.7921,35.2742,24.0015,48,24.0015a29.3537,29.3537,0,0,1,12.6716,2.8431l-9.5927,9.5926A11.1546,11.1546,0,0,0,48,36.0007,12.0112,12.0112,0,0,0,36.0007,48a11.1589,11.1589,0,0,0,.4365,3.0789L25.3014,62.2147A88.0132,88.0132,0,0,1,13.2677,48Z');

    // Create path 2
    path2.setAttribute('d', 'M94.9893,44.6721c-2.4234-3.6363-4.9809-7.1751-7.6709-10.5528l-8.5461,8.5461c1.3007,1.6669,2.6131,3.4128,3.96,5.3346C71.1761,64.4924,61.5307,71.3423,49.5475,71.89L38.5714,82.8663A42.5472,42.5472,0,0,0,48,83.9978c22.1588,0,35.6814-15.7022,46.9893-32.67A5.9842,5.9842,0,0,0,94.9893,44.6721Z');

    // Append paths to svg
    svg.appendChild(path1);
    svg.appendChild(path2);

    return svg;
};

function createReturnArrowSVG() {
    // Please note that this svg is taken from  https://www.iconfinder.com

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

    // Create svg attribute(s) and clas(es)
    svg.setAttribute('viewBox', '0 0 32 32');
    svg.setAttribute('width', '32');
    svg.setAttribute('height', '32');

    // Create path 1
    path1.setAttribute('d', 'M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z');

    // Append paths to svg
    svg.appendChild(path1);

    return svg;
};



export { 
    createGitHubSVG,
    createTwitterSVG,
    createInstagramSVG,
    createEyeShown,
    createEyeHidden,
    createReturnArrowSVG,
};