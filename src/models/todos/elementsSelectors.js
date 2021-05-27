const usernameTxt   = () => document.getElementById("username-txt");
const logoutBtn     = () => document.getElementById("logoutBtn");
const newTaskBtn    = () => document.getElementById("newTaskBtn");
const createTaskBtn = () => document.getElementById("createTaskBtn");
const todoList      = () => document.getElementById("todoList");
const modalBox      = () => document.getElementById("modalBox");

const todoItem      = () => document.getElementsByName("todoItem");
const todoCheckBox  = () => document.getElementsByName("todoCheckBox");
const todoText      = () => document.getElementsByName("todoText");
const todoName      = () => document.getElementsByName("todoName");
const deleteTodo    = () => document.getElementsByName("deleteTodo");

export {
    usernameTxt  ,
    logoutBtn    ,
    newTaskBtn   ,
    createTaskBtn,
    todoList     ,
    modalBox     ,
    todoItem     ,
    todoCheckBox ,
    todoText     ,
    todoName     ,
    deleteTodo   ,
};