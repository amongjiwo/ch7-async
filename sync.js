const fs = require("fs-extra");
const d = new Date();

function main() {
  fs.outputFileSync("tugas/contoh.txt", "Ini dibuat pakai sync");
  fs.copySync("tugas/contoh.txt", "tugas/backup.txt");
  fs.appendFileSync("tugas/backup.txt", `\nIni file backup\nCreated at ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);

  const data = fs.readFileSync("tugas/backup.txt", "utf8");
  console.log(data);

  fs.copySync("tugas/", "tugas-sync/")
  fs.removeSync("tugas/");
  const dataNew = fs.readFileSync("tugas-sync/backup.txt", "utf8");
  console.log(dataNew, "di folder baru");
}

main();