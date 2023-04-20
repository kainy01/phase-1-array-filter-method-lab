// Code your solution here
function findMatching(arr, name) {
  return arr.filter((el) => {
    return name.toLowerCase() == el.toLowerCase();
  });
}

function fuzzyMatch(arr,name){
return arr.filter((el)=>{
    return el.startsWith(name)
})
}

function matchName(arr,name){
    return arr.filter((el)=>{
        return el.name==name
    })
}