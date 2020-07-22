/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here

function getGroupEmployees(arrayEmployees) {  
    let groupNames = arrayEmployees.map(function (item) {
        if(item.nameOrder && item.nameOrder === "reverse")
        return {
            group: item.group,
            name: item.last + ' ' + item.first
        };
        else
        return {
            group: item.group,
            name: item.first + ' ' + item.last
        };
    });
    let result = groupNames.reduce((c, v) => {
       c[v.group] = c[v.group] || [];                         
        c[v.group].push({name:v.name});   
       return c;
     }, {});

    console.log(result);
    return result;

 }

getGroupEmployees(employees);
/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
