export const format_descDex = (text) => {
    //console.log(text.replace(/(\r\n|\n|\r)/gm, ''));  // Imprime "Linha 1Linha 2Linha 3"
    return (text.replace(/(\r\n|\n|\r)/gm, ''))
}
export const format_numDex = (num) => {
    return String(num).padStart(3, '0');
}
export const calcPesoAlt = (peso) => {
    //peso hectograma para kilo
    return String(peso / 10).replace('.', ',')
}
export const firstUpper=(text)=>{
    return text.charAt(0).toUpperCase() + text.slice(1);
}