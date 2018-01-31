export const API_HOSTNAME = 'http://localhost:3001'

const urlBuild = service => `${API_HOSTNAME}${service}`;

export const REFUNDS = urlBuild('/refunds')
export const ACCOUNTS = urlBuild('/accounts')
export const LOGIN = urlBuild('/login')
export const USERS = urlBuild('/users')
export const BANKS = urlBuild('/banks')