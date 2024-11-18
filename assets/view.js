function changeProductView(columns) {
    const productList = document.getElementById('product-list');
    const buttons = document.querySelectorAll('.view-button');
  
    // Xóa tất cả các lớp liên quan đến cột
    productList.classList.remove('columns-1', 'columns-2', 'columns-3', 'columns-4');
  
    // Thêm lớp tương ứng với số cột
    productList.classList.add(`columns-${columns}`);
  
    // Cập nhật trạng thái active cho nút
    buttons.forEach(button => button.classList.remove('active'));
    buttons[columns - 1].classList.add('active');
  }
  