//************************* ES5 ********************************
/*
//PART 1
var myName = "Moh Amilin";

myName = "Belajar dengan Amilin";
myName = "Makan pagi";
console.log(myName);
//codingan diatas sangat beresiko jika kita membuat
//program menggunakan tipe data string yang seharusnya tidak dapat dirubah
*/

/*
//PART 2
//#PENGGUNAAN LET
var myCars = ['Pajero', 'Toyota', 'BMW'];

for (var i = 0; i < myCars.length; i++) {
    console.log(myCars[i]);
}

console.log(i); //ketika kita lakukan console.log(i) nilainya tetap keluar padahal berada di luar {}
*/

/*
//PART 3
//#STRING CONGCAT

//ambil element
const user_place = document.getElementById('user');

const user_logged = "Tony";
user_place.innerHTML = "Hi, " + user_logged;
console.log(user_logged);
*/

//************************* ES6 ********************************

/*
//PART 1
const myCar = "Pajero";
console.log(myCar);ro";
console.log(myCar);
*/

/*
//PART 2
//#PENGGUNAAN LET
let myCars = ['Pajero', 'Toyota', 'BMW'];

for (let i = 0; i < myCars.length; i++) {
    console.log(myCars[i]);
    console.log(i);
}
*/

/*
//PART 3
//#STRING CONGCAT

//ambil element
const user_place = document.getElementById('user');

const user_logged = "Tony";
user_place.innerHTML = `Hi, ${user_logged} Apa Kabar ?`;
console.log(user_logged);
*/

/*
//PART 4
//#OBJETC LITERAL

//ambil elemen
const cart_items = document.getElementById('cart');

function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("Samsung S6", "Gadegt");
cart_items.innerHTML = `Product : ${getProduct.name} dengan Category ${getProduct.category} `;
*/

/*

//PART 5
// ARRAY FOREACH

//ambil elemet
const sklill_holder = document.getElementById('skills');

//buat array
const yourSkills = ['Teaching', 'Web Dev', 'Ios Dev'];

//menambah item ke array
yourSkills.push('DevOps');

//menamplikan di browser / html
let parent = '<ul>';

//menampilkan di console
yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(`${skill}`);
})

//menamplikan di browser / html
parent += '<ul>';
sklill_holder.innerHTML = parent;
*/

/*
//PART 6
//MAP => fungsinya sama dengan foreach hanya saja dengan fungsi ini aplikasi dapat brjln lbh cpt

//ambil element
const sklill_holder = document.getElementById('skills');

//buat array
const yourSkills = ['Web', 'Android', 'IOS'];

const printSkill = yourSkills.map(skill => {
    return skill;
});

sklill_holder.innerHTML = printSkill;
*/

/*
//PART 7
//MAP FILTER

//ambil element
const sklill_holder = document.getElementById('skills');

//buat array
const yourSkills = ['Web', 'Android', 'IOS'];

//filter data ; untuk mengambil beberapa data -> bergunan ktk bekerja dengan API
const myPrimarySkill = yourSkills.filter(skill => {
    return skill === "Android";
});

sklill_holder.innerHTML = myPrimarySkill;
*/

/*
//PART 8
//CLASSES

//ambil elemen
const data = document.getElementById('data');

//modul untuk member kelas
class Siswa {
    constructor(username, password, id) {
        this.username = username;
        this.password = password;
        this.id = id;
    }

    //membuat fungsi join / gabung
    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.id);
    }
}

let tambahSiswa = new Siswa('Amilin', '12345y', 23);
tambahSiswa.gabung();
*/

//PART 9
//INHERITANCE => anak kelas
const data = document.getElementById('data');

//modul untuk member kelas
class Siswa {
    constructor(username, password, id) {
        this.username = username;
        this.password = password;
        this.id = id;
    }

    //membuat fungsi join / gabung
    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.id);
    }
}

class Langganan extends Siswa {
    constructor(username, namaPaket) {
        super(username); //gunakan super karena kita mengambil Class Parent
        this.namaPaket = namaPaket;
    }

    paket() { //nama function tidak boleh sama dengan parameter 
        console.log('Hi,' + this.username + ' telah membeli kelas langganan pada paket ' + this.namaPaket);
    }
}

let tambahLangganan = new Langganan('Amilin', 'Web Dev');
tambahLangganan.paket();