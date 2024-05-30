// // Core Module
// // File System
const fs = require('fs');
// const chalk = require(`chalk`);
// const validator = require(`validator`);

// // menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync(`data/test.txt`, `Hello World secara synchronous!`); 
// } catch (e) {
//     console.log(e);
// }
// fs.writeFileSync(`test.txt`, `Hello World secara Synchronous`);

// menuliskan string ke file (asynchronosus)

// fs.writeFile(`data/test.txt`, `Hello World secara asynchronous!`, (e) => {
//     console.log(e);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync(`data/contacts.json`);
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile(`data/test.txt`, `utf-8`,(err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Read line
// const readline = require(`readline`);
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
 // membuat folder data jika belum ada
const dirPath = `./data`;
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);

}

// membuat file contacts.json jika belum ada

const dataPath = `./data/contacts.json`;
if(!fs.existsSync (dataPath)) {
    fs.writeFileSync(dataPath, `[]`, `utf-8`)
}

// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         });
//     });
// };
// ambil semua data di contact.json
const loadContact = () => {
    const file = fs.readFileSync(`data/contacts.json`, 'utf8');
    const contacts = JSON.parse(file);
    return contacts;
};

// cari contact berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase()=== nama.toLowerCase());
    return contact;
};

// menuliskan /menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}



// menambahkan data contact baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push (contact);
    saveContacts(contacts);
};


// cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.nama === nama);
};

module.exports = { loadContact, findContact, addContact, cekDuplikat};