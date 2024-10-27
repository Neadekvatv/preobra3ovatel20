document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = convertText(inputText);
    document.getElementById('outputText').value = outputText;
});

document.getElementById('reverseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = reverseConvertText(inputText);
    document.getElementById('outputText').value = outputText;
});

function convertText(text) {
    const replacements = {
        'А': '4', 'В': '8', 'Г': '2', 'Д': '9', 'Е': '3', 'Ж': ')1(', 'З': '3', 'И': '1', 'К': '1<', 'Л': '^',
        'М': '^^', 'Н': '11', 'О': '0', 'П': '11', 'Р': '?', 'С': '(', 'Т': '7', 'У': '7', 'Ф': '<1>', 'Х': '%',
        'Ц': '11,', 'Ч': '4', 'Ш': '111', 'Щ': '111,', 'Ъ': '-6', 'Ы': '61', 'Ь': '6', 'Э': '3', 'Ю': '10', 'Я': '9',
        'а': '4', 'в': '8', 'г': '2', 'д': '9', 'е': '3', 'ж': ')1(', 'з': '3', 'и': '1', 'к': '1<', 'л': '^',
        'м': '^^', 'н': '11', 'о': '0', 'п': '11', 'р': '?', 'с': '(', 'т': '7', 'у': '7', 'ф': '<1>', 'х': '%',
        'ц': '11,', 'ч': '4', 'ш': '111', 'щ': '111,', 'ъ': '-6', 'ы': '61', 'ь': '6', 'э': '3', 'ю': '10', 'я': '9'
    };

    return text.split('').map(char => replacements[char] || char).join('');
}

function reverseConvertText(text) {
    const replacements = {
        '4': 'А', '8': 'В', '2': 'Г', '9': 'Д', '3': 'Е', ')1(': 'Ж', '3': 'З', '1': 'И', '1<': 'К', '^': 'Л',
        '^^': 'М', '11': 'Н', '0': 'О', '11': 'П', '?': 'Р', '(': 'С', '7': 'Т', '7': 'У', '<1>': 'Ф', '%': 'Х',
        '11,': 'Ц', '4': 'Ч', '111': 'Ш', '111,': 'Щ', '-6': 'Ъ', '61': 'Ы', '6': 'Ь', '3': 'Э', '10': 'Ю', '9': 'Я',
        '4': 'а', '8': 'в', '2': 'г', '9': 'д', '3': 'е', ')1(': 'ж', '3': 'з', '1': 'и', '1<': 'к', '^': 'л',
        '^^': 'м', '11': 'н', '0': 'о', '11': 'п', '?': 'р', '(': 'с', '7': 'т', '7': 'у', '<1>': 'ф', '%': 'х',
        '11,': 'ц', '4': 'ч', '111': 'ш', '111,': 'щ', '-6': 'ъ', '61': 'ы', '6': 'ь', '3': 'э', '10': 'ю', '9': 'я'
    };

    return text.split('').map(char => {
        if (char === '1' && text.slice(text.indexOf(char) + 1, text.indexOf(char) + 2) === '<') {
            return replacements['1<'];
        } else if (char === '1' && text.slice(text.indexOf(char) + 1, text.indexOf(char) + 2) === '1') {
            return replacements['11'];
        } else if (char === '1' && text.slice(text.indexOf(char) + 1, text.indexOf(char) + 2) === '1' && text.slice(text.indexOf(char) + 2, text.indexOf(char) + 3) === '1') {
            return replacements['111'];
        } else if (char === '1' && text.slice(text.indexOf(char) + 1, text.indexOf(char) + 2) === '1' && text.slice(text.indexOf(char) + 2, text.indexOf(char) + 3) === '1' && text.slice(text.indexOf(char) + 3, text.indexOf(char) + 4) === ',') {
            return replacements['111,'];
        } else {
            return replacements[char] || char;
        }
    }).join('');
}
