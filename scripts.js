// Xử lý form đăng ký thành viên
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('success-message').textContent = `Cảm ơn ${name} đã đăng ký! Chúng tôi sẽ gửi khuyến mãi tới email ${email}.`;
});

// Xử lý form đánh giá
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const reviewText = document.getElementById('review-text').value;
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `<p>"${reviewText}" - <strong>Khách hàng ẩn danh</strong></p>`;
    document.getElementById('reviews').appendChild(newReview);
    document.getElementById('review-text').value = ''; // Reset form
});
