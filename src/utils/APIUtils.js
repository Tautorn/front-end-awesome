export const createBearerHeader = (jwtToken) => {
    return {'Authorization': `Bearer ${jwtToken}`}
}