const fs = require("fs-extra");
const d = new Date();

function main() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai callback", () => {
    fs.copy("tugas/contoh.txt", "tugas/backup.txt", () => {
      fs.appendFile("tugas/backup.txt", `\nIni file backup\nCreated at ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`, 
      () => {
        fs.readFile("tugas/backup.txt", "utf8", (err, data) => {
          console.log(data);
          fs.copy("tugas/", "tugas-callback/", () => {
              fs.remove("tugas/", () => {
                  fs.readFile("tugas-callback/backup.txt", "utf8", (err, dataNew) => {
                      console.log(dataNew, "di folder baru");
                  });
              });
          });
        });
      });
    });
  });
}

main();