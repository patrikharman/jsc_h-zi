export function osszeadas(szam) {
    let osszeg = 0;
    for (let i = 1; i <= szam; i++) {
        osszeg += i;
    }
    return osszeg;
}