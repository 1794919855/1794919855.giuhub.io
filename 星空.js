var texts = [
    "生日快乐呀",
    "天天开心",
    "我来入月",
    "皓腕凝霜雪",
    "众里嫣然通一顾",
    "人间颜色如尘土",
    "若非群玉山头见",
    "会向瑶台月下逢",
    "沉鱼落雁鸟惊喧",
    "羞花闭月花愁颤",
    "解释春风无限恨",
    "沉香亭北倚阑干",
    "生日快乐呀",
    "天天开心",
    "我来入月",
    "皓腕凝霜雪",
    "众里嫣然通一顾",
    "人间颜色如尘土",
    "若非群玉山头见",
    "会向瑶台月下逢",
    "沉鱼落雁鸟惊喧",
    "羞花闭月花愁颤",
    "解释春风无限恨",
    "沉香亭北倚阑干",
    "生日快乐呀",
    "天天开心",
    "我来入月",
    "皓腕凝霜雪",
    "众里嫣然通一顾",
    "人间颜色如尘土",
    "若非群玉山头见",
    "会向瑶台月下逢",
    "沉鱼落雁鸟惊喧",
    "羞花闭月花愁颤",
    "解释春风无限恨",
    "沉香亭北倚阑干",
    "生日快乐呀",
    "天天开心",
    "我来入月",
    "皓腕凝霜雪",
    "众里嫣然通一顾",
    "人间颜色如尘土",
    "若非群玉山头见",
    "会向瑶台月下逢",
    "沉鱼落雁鸟惊喧",
    "羞花闭月花愁颤",
    "解释春风无限恨",
    "沉香亭北倚阑干",
    "生日快乐呀",
    "天天开心",
    "我来入月",
    "皓腕凝霜雪",
    "众里嫣然通一顾",
    "人间颜色如尘土",
    "若非群玉山头见",
    "会向瑶台月下逢",
    "沉鱼落雁鸟惊喧",
    "羞花闭月花愁颤",
    "解释春风无限恨",
    "沉香亭北倚阑干"
];

function randomNum(min, max) {
    var num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}

function init() {
    var container = document.querySelector('.container');
    var f = document.createDocumentFragment();
    texts.forEach(function (w) {
        var word_box = document.createElement('div');
        var word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color='#BAABDA';
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-dealy",randomNum(20,0)+'s');
        word_box.appendChild(word);
        f.appendChild(word_box);
    });
    container.appendChild(f);
}

window.addEventListener('load',init);
