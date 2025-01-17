document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbs = document.querySelector('.breadcrumbs');
    const path = window.location.pathname.split('/').filter(part => part !== '');
    const breadcrumbHTML = path.map((segment, index) => {
        const url = '/' + path.slice(0, index + 1).join('/');
        const name = segment.replace(/-/g, ' ').replace('.html', '');
        return `<a href="${url}">${name.charAt(0).toUpperCase() + name.slice(1)}</a>`;
    });

    breadcrumbs.innerHTML = breadcrumbHTML.join(' > ');
});
