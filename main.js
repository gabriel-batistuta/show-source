// const exec = require('child_process');
// const exec = ChildProcess.exec()

function getSource() {
    const url = document.querySelector("input.source-url")
    const output = document.querySelector("div.output-source")
    console.log(url)

    const source = fetch(url).then(response => response.text()) 
    // source = fetch(`${url}`).then((response) => response.text());
    console.log(source)

    const comandoPython = `python3 main.py ${url}`

    // Executa o comando Python
    exec(comandoPython, (erro, stdout, stderr) => {
      if (erro) {
        output.innerHTML = `${erro}`
        console.error(`Erro ao executar o código Python: ${erro}`);
        return;
      }
      
      output.innerHTML = `${stdout}`
      console.log(`Resposta: ${stdout}`);
    });

}

getSource()