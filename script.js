document.addEventListener('DOMContentLoaded', () => {
    const myList = document.querySelector('tbody'); //tbody
    const addForm = document.getElementById('addForm'); //form


    //delete row
    myList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) { //delete button
            const tr = e.target.closest('tr'); //
            tr.remove();
        }
    });

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameValue = addForm.querySelector('input[name="name"]').value;
        const idValue = addForm.querySelector('input[name="idno"]').value;
        const countryValue = addForm.querySelector('select[name="country"]').value;
        const languageValue = addForm.querySelector('select[name="language"]').value;

        const tr = document.createElement('tr');
        const nameCell = document.createElement('td');
        const idCell = document.createElement('td');
        const countryCell = document.createElement('td');
        const languageCell = document.createElement('td');
        const deleteBtnCell = document.createElement('td');
        const deleteBtn = document.createElement('button');

        // Set text content
        nameCell.textContent = nameValue;
        idCell.textContent = idValue;
        countryCell.textContent = countryValue;
        languageCell.textContent = languageValue;
        deleteBtn.textContent = 'Delete';

        // Add classes
        tr.classList.add('mylist');
        deleteBtn.classList.add('delete');

        // Append cells to the row
        tr.appendChild(nameCell);
        tr.appendChild(idCell);
        tr.appendChild(countryCell);
        tr.appendChild(languageCell);
        deleteBtnCell.appendChild(deleteBtn);
        tr.appendChild(deleteBtnCell);

        // Append row to the table
        myList.appendChild(tr);

        // Clear input
        addForm.querySelector('input[name="name"]').value = '';
        addForm.querySelector('input[name="idno"]').value = '';
        addForm.querySelector('select[name="country"]').value = '';
        addForm.querySelector('select[name="language"]').value = '';
    });
});




