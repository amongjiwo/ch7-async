const fs = require("fs-extra");
const d = new Date();

async function main() {
  await fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai Async Await");
  await fs.copy("tugas/contoh.txt", "tugas/backup.txt");
  await fs.appendFile("tugas/backup.txt", `\nIni file backup\nCreated at ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);

  const data = await fs.readFile("tugas/backup.txt", "utf8");
  console.log(data);

  await fs.copy("tugas/", "tugas-async-await/")
  await fs.remove("tugas/");
  const dataNew = await fs.readFile("tugas-sync/backup.txt", "utf8");
  console.log(dataNew, "di folder baru");
}

main();