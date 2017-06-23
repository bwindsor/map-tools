export function latLonToArcLength(latLon1: L.LatLng, latLon2: L.LatLng): number {
    const R = 6371e3; // metres
    let φ1 = deg2rad(latLon1.lat);
    let φ2 = deg2rad(latLon2.lat);
    let Δφ = deg2rad(latLon2.lat - latLon1.lat);
    let Δλ = deg2rad(latLon2.lng - latLon1.lng);

    let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

export function deg2rad(deg: number) : number {
    return deg * Math.PI / 180;
}