function solution(D) {
    var dayDict = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
    var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // USING JAVASCRIPT'S INBUILT DATE FUNCTIONS TO REFERENCE ACTUAL WEEK DAY ON THE SPECIFIC DATE
    for (const d in D) {
        var date = d.split('-');
        var day = new Date(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]));
        day = day.toDateString().split(' ')[0];
        dayDict[day] += D[d];
    }

    // HANDLING DAYS WITH 0 VALUES
    days.map((day, index) => {
        if (dayDict[day] === 0) {
            //WHEN MONDAY HAS A 0 VALUE
            if (index === 0) {
                dayDict['Mon'] = (dayDict['Tue'] + dayDict['Sun']) / 2;
            }
            //WHEN SUNDAY HAS A 0 VALUE
            else if (index === 6) {
                dayDict['Sun'] = (dayDict[days[0]] + dayDict[days[5]]) / 2;
            }
            //WHEN SOME OTHER DAY HAS A 0 VALUE
            else {
                dayDict[day] =
                    (dayDict[days[index - 1]] + dayDict[days[index + 1]]) / 2;
            }
        }
    });

    D = dayDict;
    return D;
}

var input1 = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2,
};

console.log('Output 3: ', solution(input1));

//WHEN TUE AND SUN HAVE 0 AS VALUE
var input2 = {
    '2020-01-01': 6,
    '2020-01-03': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4,
};

console.log('Output 3: ', solution(input2));

// TESTING CORNER CONSTRAINTS FOR VALUES
var input3 = {
    '2020-01-01': 1000000,
    '2020-01-02': -1000000,
    '2020-01-03': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4,
    '2020-01-08': 1000000,
    '2020-01-09': -1000000,
};

console.log('Output 3: ', solution(input3));

// TESTING CORNER CONSTRAINTS FOR VALUES
var input4 = {
    '1970-01-01': 1000,
    '2020-01-02': 1,
    '2020-01-03': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2100-01-01': 200,
};

console.log('Output 4: ', solution(input4));