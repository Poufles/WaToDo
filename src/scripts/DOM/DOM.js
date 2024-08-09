const DOM = function () {
    const body = document.querySelector('body');

    const prependContainer = (container) => {
        body.prepend(container);
    };

    const appendContainer = (container) => {
        body.appendChild(container);
    };

    const removeContainer = (container) => {
        body.removeChild(container);
    };

    return {
        prependContainer,
        appendContainer,
        removeContainer,
    };
}();

export default DOM;