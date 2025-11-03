// Theme manager - can be imported if needed
export function initTheme() {
    const savedTheme = localStorage.getItem('appTheme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    return savedTheme;
}

export function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('appTheme', newTheme);
    return newTheme;
}