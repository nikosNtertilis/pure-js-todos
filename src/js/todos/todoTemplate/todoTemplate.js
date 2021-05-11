const todoTemplate = (elem, index) => `<div id="${elem.title + index}" name="todoItem" class="flex jc-space-between align-items-center" style="
padding: 0px 60px 0px 60px;
">

    <div id="todoCheckBox" name="todoCheckBox" class="todo-check-box"></div>
    <div id="todoNameTimeText" name="todoNameTimeText" class="fd-column" style="
    width: 80%;
    ">
        <div id="todoNameTime" class="flex jc-space-between" style="
        width: 100%;
        ">
            <div id="todoName" name="todoName">
                <h3>${elem.title}</h3>
            </div>
            <div id="todoTime" name="todoTime">
                <h3 >${elem.time}</h3>

            </div>
            
        </div>

        <div id="todoText" name="todoText" style="
        padding: 1.33em 0;
        ">
            <h4 class="margin0">${elem.text}</h4>

        </div>
    </div>
    

    <div id="deleteTodo" name="deleteTodo" style="
    width: 100px;
    height: 100px;
    background-color: blue;
    visibility: hidden;
    ">
    </div>

</div>`

export default todoTemplate;