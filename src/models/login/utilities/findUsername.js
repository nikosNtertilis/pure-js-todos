const findUsername = (list, toFind) => 
    list.find(elem => 
        elem.username === toFind);


export default findUsername;