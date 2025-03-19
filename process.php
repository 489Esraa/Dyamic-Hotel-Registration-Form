<?php
$servername = "localhost";
$username = "root"; // الافتراضي في XAMPP
$password = ""; // اتركه فارغًا في XAMPP
$dbname = "hotel_db";

// الاتصال بقاعدة البيانات
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

// استقبال البيانات من الفورم
$full_name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$checkin = $_POST['checkin'];
$checkout = $_POST['checkout'];
$room_count = $_POST['room'];
$room_type = $_POST['type'];

// إدخال البيانات في الجدول
$sql = "INSERT INTO reservations (full_name, email, phone, checkin, checkout, room_count, room_type)
        VALUES ('$full_name', '$email', '$phone', '$checkin', '$checkout', '$room_count', '$room_type')";

if ($conn->query($sql) === TRUE) {
    echo "تم الحجز بنجاح!";
} else {
    echo "حدث خطأ أثناء الحجز: " . $conn->error;
}

$conn->close();
?>
