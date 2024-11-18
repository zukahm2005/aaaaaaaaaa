function toggleFilterSidebar() {
  const sidebar = document.getElementById('filter-sidebar'); // Lấy sidebar
  const openButton = document.querySelector('.open-btn'); // Nút mở sidebar

  // Kiểm tra trạng thái của sidebar
  if (sidebar.classList.contains('active')) {
    // Nếu sidebar đang mở -> đóng
    sidebar.classList.remove('active');
    sidebar.classList.add('hidden');
    openButton.style.display = 'block'; // Hiện nút "Bộ Lọc"
  } else {
    // Nếu sidebar đang đóng -> mở
    sidebar.classList.remove('hidden');
    sidebar.classList.add('active');
    openButton.style.display = 'none'; // Ẩn nút "Bộ Lọc"
  }
}

function filterProducts() {
  const category = document.getElementById('category').value;
  const stockStatus = document.getElementById('stock-status').value;
  const priceRange = document.getElementById('price-range').value;

  const products = document.querySelectorAll('.product-card');

  products.forEach((product) => {
    const productCategory = product.getAttribute('data-category');
    const productStock = product.getAttribute('data-stock');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    let isVisible = true;

    // Lọc theo danh mục
    if (category && productCategory !== category) {
      isVisible = false;
    }

    // Lọc theo trạng thái
    if (stockStatus && productStock !== stockStatus) {
      isVisible = false;
    }

    // Lọc theo giá
    if (priceRange === 'under-500' && productPrice >= 1000) {
      isVisible = false;
    } else if (priceRange === '500-1000' && (productPrice < 1000 || productPrice > 10000)) {
      isVisible = false;
    } else if (priceRange === 'over-1000' && productPrice <= 10000) {
      isVisible = false;
    }

    // Hiển thị hoặc ẩn sản phẩm
    product.style.display = isVisible ? 'block' : 'none';
  });

  // Sau khi lọc, đóng sidebar
  toggleFilterSidebar();
}
