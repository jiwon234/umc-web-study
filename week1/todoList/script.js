// task 요소 만드는 함수
function createTaskElement(task) {
  const newLi = document.createElement('div');
  const newBtn = document.createElement('button');
  const newSpan = document.createElement('span');
  
  // 클래스 추가
  newBtn.classList.add('complete-btn');

  // 텍스트 추가 
  const btnText = document.createTextNode('완료');
  newBtn.appendChild(btnText);
  const taskText = document.createTextNode(task);
  newSpan.appendChild(taskText);

  // 계획과 완료버튼을 리스트 한 줄에 담기 
  newLi.appendChild(newSpan);
  newLi.appendChild(newBtn);

  // 버튼에 함수 연결
  newBtn.addEventListener('click', () => completeTask(newLi, newBtn));

  // 만든 요소를 반환
  return newLi;
}

// 완료 버튼 함수 
function completeTask(taskElement, button) {
  const done_list = document.getElementById('done_list');
  done_list.appendChild(taskElement);

  button.textContent = '삭제';
  button.classList.replace('complete-btn', 'delete-btn')
  button.addEventListener('click', () => removeTask(taskElement))
}

// 삭제 버튼 함수 
function removeTask(taskElement) {
  taskElement.remove();
}

// 할 일 추가 함수 
function addTask(e) {
  let task = document.getElementById("input_txt").value.trim();
  if(e.keyCode == 13) { 

    if (task == '') return;

    // 할 일 요소 만들기 
    const newTaskElement = createTaskElement(task);
    
    // 할 일 추가하기
    const task_list = document.querySelector('#task_list');
    task_list.appendChild(newTaskElement);

    // 입력 필드 초기화
    document.getElementById("input_txt").value = '';
  }
}    