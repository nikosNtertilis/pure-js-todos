const modalBox = document.getElementById("modalBox");

const modalBackdrop = (e) => {
    if(e.target === modalBox){
    modalBox.style.display = "none";
    }
}

export default modalBackdrop;