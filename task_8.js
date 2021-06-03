let map = new Map([
    ['Patrick', 'vocals'],
    ['Pete', 'bass'],
    ['Joe', 'guitar'],
    ['Andy', 'drums']
]);

for (let x of map.keys()) {
    console.log(`Ключ - ${x}, значение - ${map.get(x)}`);
}

