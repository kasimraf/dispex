const Url = "https://dispex.org/api/vtest";

export function getStreets() {
    return fetch(`${Url}/Request/streets`, {
        method: 'GET',
    })
}

export function getHouses(id) {
    return fetch(`${Url}/Request/houses/${id}`, {
        method: 'GET',
    })
}

export function getHousesFlats(id) {
    return fetch(`${Url}/Request/house_flats/${id}`, {
        method: 'GET',
    })
}

export function getTenants(id) {
    return fetch(`${Url}/HousingStock/clients?addressId=${id}`, {
        method: 'GET',
    })
}
