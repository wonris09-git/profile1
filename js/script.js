const snowflakeChar = '❄';  // Bạn có thể thay đổi biểu tượng bông tuyết
const snowflakeCount = 1000000;  // Số lượng bông tuyết

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = snowflakeChar;

    snowflake.style.left = `${Math.random() * window.innerWidth}px`;  // Vị trí ngẫu nhiên ngang
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;  // Tốc độ rơi ngẫu nhiên
    snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;  // Kích thước ngẫu nhiên

    document.body.appendChild(snowflake);

    // Xóa bông tuyết khi nó rơi khỏi màn hình
    setTimeout(() => {
        snowflake.remove();
    }, (parseFloat(snowflake.style.animationDuration) * 1000));
}

// Tạo nhiều bông tuyết liên tục
setInterval(createSnowflake, 200);
