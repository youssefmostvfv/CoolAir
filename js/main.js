"use strict";
document.addEventListener("DOMContentLoaded", function(){
    // الكود هيتنفذ بعد ما الصفحة كلها تتحمل.
    const track = document.getElementById("tickerTrack");
    // بيجيب العنصر اللي الـ id بتاعه tickerTrack.
    if(track.classList.contains('duplicated')) return;
    // لو العنصر ده بالفعل عنده كلاس 'duplicated' → يوقف تنفيذ الكود (return).
    // يعني لو الكود اتنفذ قبل كده، مش هيتنفذ مرة تانية.
    track.classList.add('duplicated');
    // لو العنصر معندوش الكلاس 'duplicated' → ضيفه. وده معناه إنه بعد كده أي محاولة إعادة تنفيذ الكود هتتجاهل.

    const logos = Array.from(track.children);
    // السطر ده بيجهز مصفوفة كل اللوجوهات داخل الشريط بحيث تقدر تتحكم فيها بالكود (تحريك، clone، reorder… إلخ).

    const containerWidth = track.parentElement.offsetWidth;
    // ده مقياس لمعرفة حدود الشريط داخل الصفحة.

const originalLogos = Array.from(track.children);
let originalWidth = 0;
originalLogos.forEach(logo => {
    originalWidth += logo.offsetWidth + 60;
});

const repetitions = Math.ceil((track.parentElement.offsetWidth * 3) / originalWidth);

for(let i = 0; i < repetitions; i++) {
    originalLogos.forEach(logo => {
        track.appendChild(logo.cloneNode(true));
    });
}
});

// الغرض: تجنب تكرار تأثير الكود نفسه على نفس العنصر، خصوصاً لو فيه event أو animation هيتنفذ مرة واحدة بس.