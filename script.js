function calcular() {
    const base = parseFloat(document.getElementById('base').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);

    if (isNaN(base) || isNaN(porcentaje)) {
        document.getElementById('resultado').innerText = "Error: Por favor, ingrese números válidos.";
        return;
    }

    const resultado = (base * porcentaje) / 100;
    
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
