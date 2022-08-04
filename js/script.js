var itemList = [];

var addBtn = document.getElementById('add');
// addBtn.onclick = addList;
addBtn.addEventListener('click', addList);

function addList() {
    var item = document.getElementById('item').value;
    if (item != null && item != '') {
        //item의 값이 비어있거나 없을때 둘 다 실행x
        itemList.push(item);
        document.getElementById('item').value = '';
        document.getElementById('item').focus();
    } else {
        alert('내용을 입력해주세요');
    }
    showList();
}

function showList() {
    var list = '<ul>';
    for (i = 0; i < itemList.length; i++) {
        list += `<li> ${itemList[i]}<span onclick="color(this)">&nbsp;√</span> <span class='close' id="${i}">X</span></li>`;
    }
    list += '</ul>';
    document.getElementById('itemList').innerHTML = list;

    var remove = document.getElementsByClassName('close');
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = removeList;
    }
}

function removeList() {
    var id = this.getAttribute('id');
    itemList.splice(id, 1);
    showList();
}

function color(element) {
    //element 매개변수에 클릭한 나 자신 : this가 들어가서 동작
    element.parentElement.style.textDecoration = 'line-through';
    element.parentElement.style.backgroundColor = '#e9e9e9';
}
