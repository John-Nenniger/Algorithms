// Given a list of possibly overlapping intervals, 
// return a new list of intervals where all overlapping intervals have been merged.

// The input list is not necessarily ordered in any way.

// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], 
// you should return [(1, 3), (4, 10), (20, 25)].



function overlapping(sections){
    
}






const l = console.log

function overlap(sections){
    let result = [];
    sections.forEach((section) => {
        if(result[section[0]]){

        }
    })
} 

l(convert([8, 8, 8, 8, undefined, undefined, 8, 8, 8]))
l(convert([undefined, 8, 8, 8, undefined, undefined, 8, 8, 8, 8, 8, 8]))
// -> [[0,3], [6, 8]]



// having a tricky time getting around the fact that 0 is falsey
function convert(array){
    let merged_sections = []
    let start_segment = array.findIndex((element) => !!element)
    for(let i = 0; i < array.length; i++){
        // if we're in the middle of a segment, and the next element is undefined, then capture a segment
        if (start_segment && !array[i + 1] || start_segment === 0 && !array[i + 1]){
            merged_sections.push([start_segment, i])
            start_segment = undefined
        // if we aren't in the middle of a segment, and the current element is something, start a new segment
        } else if (start_segment !==0 && !start_segment && array[i]){
            start_segment = i
        }
    }

    return merged_sections
}