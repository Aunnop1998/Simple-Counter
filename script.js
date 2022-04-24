// ดึง element จาก HTML
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn"); //สาเหตุที่ใช้ SelectorAllเพื่อดึงปุ่มทั้งหมดที่ใช้คลาสbtnมา

// เซ็ทค่าเริ่มต้นในการนับเป็นศูนย์
let value_total = 0;

// นำ'buttons'มาลูปเพื่อดึงเอเลเมนท์ที่ใช้คลาส'.btn'เข้ามา
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // ตัวแปรที่เก็บค่าอีเวนต์ที่คลิกเลือก
    const current_btn = event.target;
    // ตัวแปรที่เก็บชื่อคลาสของอีเวนต์ที่เลือก
    const checkClass = current_btn.classList;
    console.log(checkClass);
    // ทำการกำหนดเงื่อนไขในการเช็คปุ่ม โดยอ้างอิงจากคลาสของปุ่ม
    if (checkClass[1] === "decrease") {
      value_total--;
      if (value_total < 0) {
        value.style.color = "#f03e3e";
      } else if (value_total === 0) {
        value.style.color = "#343a40";
      }
    } else if (checkClass[1] === "increase") {
      value_total++;
      if (value_total > 0) {
        value.style.color = "#51cf66";
      } else if (value_total === 0) {
        value.style.color = "#343a40";
      }
    } else {
      value.style.color = "#343a40";
      value_total = 0;
    }
    // นำเอาค่าที่ได้จากการเพิ่ม-ลดที่เก็บไว้ใน'value_total'แล้วนำข้อความไปใส่ในHTML
    value.textContent = value_total;
  });
});
