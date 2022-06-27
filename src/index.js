module.exports = function toReadable(n) {
    const words = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven', 'twelve','thirteen','fourteen',
    'fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',' hundred '];
    word = words[n/100|0] + words[(n>99)*28] + (n%100 < 20 ? words[n%100] : words[18+n/10%10|0] + ' ' + words[n%10]);
    return n==0 ? 'zero' : word.trim();
}