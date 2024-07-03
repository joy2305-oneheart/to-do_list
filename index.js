document.getElementById('add-button').addEventListener('click', function() {
    let input = document.getElementById('input-box').value.trim(); // Trim to remove leading/trailing spaces
    if (!input) {
      alert('Please enter a task.'); // Show alert if input is empty
      return;
    }
    
    // Create new elements
    let li = document.createElement('li');
    let p = document.createElement('p');
    let span = document.createElement('span');
    let spannode = document.createElement('input');
    let tasknode = document.createTextNode(input);
  
    // Configure elements
    spannode.type = "checkbox";
    span.appendChild(spannode);
    p.appendChild(tasknode);
    li.appendChild(p);
    li.appendChild(span);
  
    // Add event listener to checkbox
    spannode.addEventListener('click', function() {
      const parentElement = spannode.parentElement.parentElement;
      if (spannode.checked) {
        parentElement.classList.add('highlight');
        const spanDone = document.createElement('span');
        spanDone.textContent = " Task done";
        spanDone.classList.add('task-done'); // Add a class for easier removal
        parentElement.appendChild(spanDone);
      } else {
        parentElement.classList.remove('highlight');
        // Remove the "Task done" span if checkbox is unchecked
        const spanDone = parentElement.querySelector('span.task-done');
        if (spanDone) {
          parentElement.removeChild(spanDone);
        }
      }
    });
  
    // Append new <li> to the list
    document.getElementById('list').appendChild(li);
  
    // Clear input value
    document.getElementById('input-box').value = "";
  });
  