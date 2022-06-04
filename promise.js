const fs = require("fs-extra");
const d = new Date();

function main() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai Promise")
    .then(() => {
        return fs.copy("tugas/contoh.txt", "tugas/backup.txt");
    })
    .then(() => {
        return fs.appendFile("tugas/backup.txt", `\nIni file backup\nCreated at ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
    })
    .then(() => {
        return fs.readFile("tugas/backup.txt", "utf8");
    })
    .then((data) => {
        console.log(data);
    })
    .then(() => {
        return fs.copy("tugas/", "tugas-promise/");
    })
    .then(() => {
        return fs.remove("tugas/");
    })
    .then(() => {
        return fs.readFile("tugas-promise/backup.txt", "utf8");
    })
    .then((dataNew) => {
        console.log(dataNew, "di folder baru");
    })
}

main();