 // Toggle the display of the navigation menu on mobile
 const navbarToggle = document.getElementById('navbar-toggle');
 const navList = document.querySelector('.nav-list');

 navbarToggle.addEventListener('click', () => {
   navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
   navbarToggle.classList.toggle('active'); // Add/remove the active class for the toggle animation
 });
 
const student = {
    'Laiba': 730,
    'Asad': 899,
    'Zara': 867,
    'Maryam': 723,
    'Haris ali': 580,
    "Hurayra": 100,
    'Anum Shahid': 999,
    "Aleem": 340,
    'Fatima': 785,
    'Noor': 678,
    'Talha':467,
    'Hina': 800,
    'Ayesha': 952,
    'Iqra': 781,
};
function clickme() {
    const Name = document.getElementById('input-box').value.trim();

    if (student[Name]) {
        document.getElementById('result').innerText = `Result of ${Name}: ${student[Name]} Marks`;
    } else {
        document.getElementById('result').innerText = `Name is "${Name}:" Not avilaible Make Sure Your a student of Vocational Traning Institute of Chichawatni`;
    }


}

document.getElementById('year').textContent = new Date().getFullYear();