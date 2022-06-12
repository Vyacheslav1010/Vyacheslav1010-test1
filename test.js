const userNames = ["Микола", "Сергій", "Андрій"]

const userList = document.querySelector('.userList');


function createUserRow(userName){
  const userItem = document.createElement('div');
  userItem.innerHTML = ' <div class="userList__row">\n' +
    ' <div class="userList__name"> '+ userName +'</div>\n' +
    ' <div class="userList__controls"><div class="button">Видалити<div>\n'+
    ' </div>';
  return userItem;
}

for (let i = 0; i<userNames.length; i++){
  const userRow = createUserRow(userNames[i]);
 userList.append(userRow);
}
