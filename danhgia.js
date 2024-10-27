function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'block') {
        hideSideBar(); 
    } else {
        showSideBar(); 
    }
}

function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block'; 
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; 
}
const name = document.getElementById('name').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const reviewText = document.getElementById('review').value.trim();
    
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const reviewText = document.getElementById('review').value;

    if (!rating || !reviewText) {
        alert("Vui lòng điền đầy đủ đánh giá và nhận xét.");
        return;
    }

    const reviewItem = document.createElement('li');
    reviewItem.innerHTML = `<strong>Đánh giá: ${rating} sao</strong><br>${reviewText}`;

    document.getElementById('reviewsList').appendChild(reviewItem);
    document.getElementById('reviewForm').reset();
});
