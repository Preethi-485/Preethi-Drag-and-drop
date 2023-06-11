// Initialize the draggable items
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Initialize the droppable area
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', dragDrop);

// Drag and Drop Functions
let draggedItem = null;

function dragStart() {
    draggedItem = this;
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
}

function dragEnd() {
    setTimeout(() => {
        draggedItem.style.display = 'block';
        draggedItem = null;
    }, 0);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
}

function dragLeave() {
    this.style.backgroundColor = '';
}

function dragDrop() {
    this.style.backgroundColor = '';
    this.appendChild(draggedItem);
    // Update the UI or display success message as needed
    alert('Item dropped successfully!');
}

// Reset Button Functionality
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    container2.innerHTML = '<h2>Droppable Area</h2>';
    container1.innerHTML = `
        <h2>Draggable Items</h2>
        <div class="item" draggable="true">Item 1</div>
        <div class="item" draggable="true">Item 2</div>
        <div class="item" draggable="true">Item 3</div>
    `;
    // Reinitialize the draggable items
    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });
});
