module.exports = function toReadable(number) {
    const words = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven', 'twelve','thirteen','fourteen',
    'fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',' hundred '];
    const thousands = ['',' thousand ',' million ',' billion ',' trillion '];
    let readable = '', i=0;
    while(number>0) {
        n = number%1000;
        readable = words[n/100|0] + words[(n>99)*28] + (n%100 < 20 ? words[n%100] : words[18+n/10%10|0] + ' ' + words[n%10]) + thousands[(n!=0)*i] + readable;
        number=number/1000|0;
        i++;
    }
    return readable=='' ? 'zero' : readable.replace('  ',' ').trim();
}