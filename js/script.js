document.addEventListener('DOMContentLoaded', () => {
  const tempForm = document.getElementById('tempForm');
  const resultSection = document.getElementById('resultSection');
  const conversionResult = document.getElementById('conversionResult');
  const explanation = document.getElementById('explanation');

  tempForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const temperature = parseFloat(document.getElementById('temperature').value);
    const conversionType = document.getElementById('conversionType').value;
    
    if (isNaN(temperature)) {
      alert('Mohon masukkan angka yang valid');
      return;
    }

    let result, explanation_text;

    if (conversionType === 'CtoF') {
      result = (temperature * 9/5) + 32;
      explanation_text = `Rumus: (${temperature}°C × 9/5) + 32 = ${result.toFixed(2)}°F\n\n` +
        `Untuk mengkonversi suhu dari Celsius ke Fahrenheit:\n` +
        `1. Kalikan suhu dalam Celsius dengan 9/5\n` +
        `2. Tambahkan 32 pada hasilnya`;
    } else {
      result = (temperature - 32) * 5/9;
      explanation_text = `Rumus: (${temperature}°F - 32) × 5/9 = ${result.toFixed(2)}°C\n\n` +
        `Untuk mengkonversi suhu dari Fahrenheit ke Celsius:\n` +
        `1. Kurangi suhu dalam Fahrenheit dengan 32\n` +
        `2. Kalikan hasilnya dengan 5/9`;
    }

    conversionResult.textContent = `${temperature}° ${conversionType === 'CtoF' ? 'Celsius' : 'Fahrenheit'} = ${result.toFixed(2)}° ${conversionType === 'CtoF' ? 'Fahrenheit' : 'Celsius'}`;
    explanation.textContent = explanation_text;
    resultSection.style.display = 'block';
  });
});