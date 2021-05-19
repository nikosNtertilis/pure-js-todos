const authenticate = (list , toFind) => {
    const found = list.find(elem => 
        elem.username === toFind.username && elem.password === toFind.password
    );
    return found;
}

export default authenticate;