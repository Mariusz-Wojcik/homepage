const name = 'Mariusz';
const age = 18;
const hook = 22;

console.log(`Hej, nazywam się ${name} i mam ${age} lat z hakiem.`);
console.log(`Hak ma ledwie ${hook} lata ;)`);

const js_code = document.querySelector('.article-section__title');
console.log(js_code);

js_code.innerHTML = 'here you are... <div class= "JS_box"> JS is here </div>';

function welcome(age, name, hook) {
    console.log(`Hej, nazywam się ${name} i mam ${age} lat z hakiem.`);
    console.log(`Hak ma ledwie ${hook} lata ;)`);
};

welcome(age, name, hook);

const welcome_new = (age, name, hook)=>{
    console.log(`Hej, nazywam się ${name} i mam ${age} lat z hakiem.`);
    console.log(`Hak ma ledwie ${hook} lata ;)`);  
};

welcome_new(age, name, hook);
