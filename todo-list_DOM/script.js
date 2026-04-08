// Ambil elemen dari DOM
const courseInput = document.getElementById('courseInput');
const deadlineInput = document.getElementById('deadlineInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Fungsi untuk menambahkan mata kuliah
function addCourse() {
    const courseName = courseInput.value.trim();
    const deadline = deadlineInput.value.trim();
    
    if (courseName === '' || deadline === '') {
        alert('Nama mata kuliah dan deadline harus diisi!');
        return;
    }

    // Buat elemen li baru
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Buat elemen span untuk nama mata kuliah dan deadline
    const courseText = document.createElement('span');
    courseText.textContent = `${courseName} - Deadline: ${deadline}`;

    // Buat tombol selesai
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Selesai';
    completeButton.classList.add('complete');
    completeButton.onclick = function() {
        li.style.textDecoration = "line-through";  // Menandai tugas selesai dengan garis tengah
        completeButton.disabled = true;  // Nonaktifkan tombol setelah selesai
    };

    // Buat tombol hapus
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        taskList.removeChild(li);  // Menghapus tugas saat tombol hapus diklik
    };

    // Tambahkan elemen-elemen ke dalam li
    li.appendChild(courseText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Tambahkan li ke dalam daftar tugas
    taskList.appendChild(li);

    // Kosongkan input setelah mata kuliah ditambahkan
    courseInput.value = '';
    deadlineInput.value = '';
}

// Tambahkan event listener ke tombol tambah
addButton.addEventListener('click', addCourse);

// Agar bisa menekan Enter untuk menambah mata kuliah
courseInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addCourse();
    }
});