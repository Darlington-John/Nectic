export const toggleNav = () => {
    const navElement = document.getElementById('Overlay');

    if (navElement.style.width === '100%') {
        navElement.style.width = '0%';
    } else {
        navElement.style.width = '100%';
    }
};

export default toggleNav;