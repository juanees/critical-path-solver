//########################## Example 1 ######################

var table = new ActivityList();
table.addActivity(new Activity({
    id: 'A',
    duration: 8,
}));

table.addActivity(new Activity({
    id: 'B',
    duration: 3,
}));

table.addActivity(new Activity({
    id: 'C',
    duration: 1,
    predecessors: ['A', 'B'],
}));

table.addActivity(new Activity({
    id: 'D',
    duration: 6,
    predecessors: ['C','B'],
}));

table.addActivity(new Activity({
    id: 'E',
    duration: 4,
    predecessors: ['D','C','F','G'],
}));

table.addActivity(new Activity({
    id: 'F',
    duration: 18,
    predecessors: ['B'],
}));

table.addActivity(new Activity({
    id: 'G',
    duration: 10,
    predecessors: ['A','C'],
}));




console.table(table.getList());
var path = table.getCriticalPath('E');

//RETURNS E->F->B
console.log(path);



//########################## Example 2 ######################
/**
 * A -> C -> D
 *     /
 *    B
 */
var table2 = new ActivityList();
table2.addActivity(new Activity({
    id: 'A',
    duration: 1,
}));

table2.addActivity(new Activity({
    id: 'B',
    duration: 1,
    predecessors: [],
}));

table2.addActivity(new Activity({
    id: 'C',
    duration: 3,
    predecessors: ['A', 'B'],
}));

table2.addActivity(new Activity({
    id: 'D',
    duration: 6,
    predecessors: ['C'],
}));



console.log('TABLE 2', table2.getList());
console.table(table2.getList());
var path = table2.getCriticalPath('D');
/*
 * RETURNS D->C->A
 *	       \
 *		B
*/
console.log(path);