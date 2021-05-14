import imageURL from 'url:../../../images/trashCan.jpg'

const todoTemplate = (elem, index) => `
<div id="${elem.title + index}" name="todoItem" class="flex jc-space-between align-items-center padding5">
    <div id="todoCheckBox" name="todoCheckBox" class="todo-check-box"></div>
    <div id="todoNameTimeText" name="todoNameTimeText" class="fd-column">
        <div id="todoNameTime" class="flex jc-space-between">
            <div id="todoName" name="todoName">
                <h3>${elem.title}</h3>
            </div>
            <div id="todoTime" name="todoTime">
                <h3 >${elem.time}</h3>
            </div> 
        </div>
        <div id="todoText" name="todoText">
            <h4 class="margin0">${elem.text}</h4>
        </div>
    </div>
    <div id="deleteTodo" name="deleteTodo" class="flex center">
        <div id="trash-can" name="trashCan">
            <img id="trash-can-img" src="${imageURL}" alt="trash can">
        </div>       
    </div>
</div>`

export default todoTemplate;