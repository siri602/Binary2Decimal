
function convert() {
    let binary = document.getElementById("binary").value;

    // Validation
    if (binary.length > 8) {
        document.getElementById("result").innerText =
            "Enter at most 8 digits";
        return;
    }

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] !== '0' && binary[i] !== '1') {
            document.getElementById("result").innerText =
                "Only 0 and 1 are allowed";
            return;
        }
    }

    let decimal = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += Number(binary[i]) * Math.pow(2, power);
        power++;
    }

    document.getElementById("result").innerHTML =
    "Decimal Value: <span style='color:#22d3ee'>" + decimal + "</span>";
}
