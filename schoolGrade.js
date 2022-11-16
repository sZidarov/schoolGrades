function schoolGrades (input){
    let schoolGradesObj = {};
    for (const iterator of input) {
        let line = iterator.split(' ');
        let name = line.shift();

        if(!schoolGradesObj.hasOwnProperty(name)){
            
            schoolGradesObj[name] = line;
        }else {
                         
            schoolGradesObj[name] = schoolGradesObj[name].concat(line);
        }
    }
    let sortedArr = [];
    for (const kvp in schoolGradesObj ) {
        sortedArr.push([kvp, schoolGradesObj[kvp]]);
    }
    sortedArr.sort();
    let sortedObj = {};
    for (const kvp of sortedArr) {
        sortedObj[kvp[0]] = kvp[1];
    }
    for (const kvp in sortedObj) {
        let gradeSum = 0;
        let gradeCount = 0;
        for (const grade of sortedObj[kvp]) {
            gradeSum += Number(grade);
            gradeCount++;
        }
        sortedObj[kvp] = gradeSum/gradeCount;
    }
    for (const kvp in sortedObj) {
        
        console.log(`${kvp}: ${sortedObj[kvp].toFixed(2)}`);
    }
}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3',
'Steven 6 6']
);