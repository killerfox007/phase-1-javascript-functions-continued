function saturdayFun(saturday = 'roller-skate'){
return (`This Saturday, I want to ${saturday}!`);
}

function mondayWork(work = 'go to the office'){
    return (`This Monday, I will ${work}.`)
}
function wrapAdjective(){
    return function(name = 'special', thing = "*") {
        //const thing ="*"
        return `You are ${thing}${name}${thing}!`
    }
}