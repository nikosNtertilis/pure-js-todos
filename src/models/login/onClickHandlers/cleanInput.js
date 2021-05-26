const cleanInput = (input, value) => {
    if(input.value === `${value}`)
    input.value = '';
};

export default cleanInput;