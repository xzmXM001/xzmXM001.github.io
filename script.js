const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const catImage = document.getElementById('catImage');
const container = document.getElementById('container');

// เมื่อสัมผัสหน้าจอใกล้ปุ่ม "No" ให้ขยับปุ่ม "No" หนี
noButton.addEventListener('touchstart', () => {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // จำกัดไม่ให้ปุ่มออกนอก container
    newX = Math.max(10, Math.min(newX, maxX));
    newY = Math.max(10, Math.min(newY, maxY));

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
});

// เมื่อกด "Yes" ให้เปลี่ยนรูปเป็นภาพ GIF ดีใจและซ่อนปุ่ม
yesButton.addEventListener('click', () => {
    catImage.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWN0azMxZzRxc3F4cmtvcDFkZGRtNHAzeGx2bGF1aTNvN29kMzFiMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UBl3wsQldC8dVbpFq5/giphy.gif"; // ใส่ภาพ GIF ดีใจ

    // ซ่อนปุ่ม "Yes" และ "No"
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});
