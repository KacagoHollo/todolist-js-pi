let input = prompt('Mit szeretnél csinálni?');
const todos = ['Lista elemei:'];
while (input !== 'quit' && input !== 'q') {
if (input === 'lista') {
    console.log('********************')
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i}: ${todos[i]}`)
     }
    console.log('********************')
    }  else if (input === 'új') {
        const newTodo = prompt('Oké, mit szeretnél hozzáadni a listához?');
        todos.push(newTodo);
        console.log(`${newTodo} hozzá lett adva a listádhoz!`)
    } else if (input === 'törlés') {
        const index = parseInt(prompt('Oké, add meg a számát a tételnek, amit törölni szeretnél:'));
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`Oké, törölted a ${deleted[0]} számú tételt!`);
    }   else {
        console.log('Ismeretlen tétel!')
    } 
    }
    input = prompt('Adj meg egy feladatot!')
}
console.log('Oké, kilépünk az appból!')