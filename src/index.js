module.exports = function toReadable (number) {
    let resultStr='';
    const strNum = number.toString();
    const single = ['','one','two','three','four','five','six','seven','eight','nine'];
    const teen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dec = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        if (strNum.length==1) resultStr = single[strNum[strNum.length-1]*1];
        if (strNum.length>1) {
            if (strNum[strNum.length-2]=='1')
                resultStr = teen[strNum[strNum.length-1]*1] + resultStr
            else
                resultStr = dec[strNum[strNum.length-2]*1] + ' ' + single[strNum[strNum.length-1]*1] + resultStr
        }
        if (strNum.length>2) {
            resultStr = single[strNum[strNum.length-3]*1] + ' hundred ' + resultStr;
        }

    resultStr = resultStr.replace(/  /g,' ').trim();
    return resultStr=='' ? 'zero' : resultStr;   
}