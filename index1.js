document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn form reload trang

    // Lấy giá trị từ form
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 0;
    const reviewText = document.getElementById("review").value;

    // Kiểm tra nếu người dùng chưa chọn số sao
    if (!rating) {
        alert("Vui lòng chọn số sao để đánh giá!");
        return;
    }

    // Tạo phần tử hiển thị nhận xét
    const reviewItem = document.createElement("li");
    reviewItem.innerHTML = `<strong>${rating} sao</strong> - ${reviewText}`;

    // Thêm vào danh sách nhận xét
    document.getElementById("reviewsList").appendChild(reviewItem);

    // Reset form sau khi gửi
    document.getElementById("reviewForm").reset();
});
