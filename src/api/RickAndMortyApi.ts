
export const getApiInfo = () => {
    return fetch('https://rickandmortyapi.com/api', {
        method: 'GET',
    });
};