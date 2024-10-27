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
// Lắng nghe sự kiện click cho nút Đặt Hàng Ngay
document.querySelector('.promo-btn').addEventListener('click', function() {
    alert("Đặt hàng thành công!");
});
