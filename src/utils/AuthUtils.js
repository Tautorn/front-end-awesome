export function isAuthenticated() {
    return !!localStorage.getItem('auth-token')
}
export function isAdmin(){
    return localStorage.getItem('role') === 'admin';
}
export function isClient(){
    return localStorage.getItem('role') === 'client';
}