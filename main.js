const offCanvasMenuToggler = document.getElementById('offcanvas-menu-toggler');
const offCanvasCloseBttn = document.getElementById('offcanvas-close-bttn');

const offcanvasToggleHandler = e => {
    const bttn = e.target;
    const {
        toggle: className,
        target: targetSelector,
        animationClassname } = bttn.dataset;
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
        targetEl.classList.contains(animationClassname) ? null : targetEl.classList.toggle(animationClassname);
        targetEl.classList.toggle(className);
    }
};

offCanvasMenuToggler.addEventListener('click', offcanvasToggleHandler);
offCanvasCloseBttn.addEventListener('click', offcanvasToggleHandler);