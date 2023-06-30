function ecuaSeg(a, b, c) {
    const ds = b * b - 4 * a * c;
    if (ds < 0) {
        return "No existen soluciones reales.";
    } else if (ds === 0) {
        const x = -b / (2 * a);
        return `Solución única: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(ds)) / (2 * a);
        const x2 = (-b - Math.sqrt(ds)) / (2 * a);
        return `Soluciones: x1 = ${x1}, x2 = ${x2}`;
    }
}
const a = parseFloat(prompt("Ingrese el valor de a:"));
const b = parseFloat(prompt("Ingrese el valor de b:"));
const c = parseFloat(prompt("Ingrese el valor de c:"));

const solu = ecuaSeg(a, b, c);

alert(solu);