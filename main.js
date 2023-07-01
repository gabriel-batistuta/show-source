async function getSource(url) {
    const url = document.querySelector("input.source-url")
    const output = document.querySelector("div.output-source")
	let content = ""
	fetch('https://www.exemplo.com').then(response => response.text()).then(data => {
		// Atribuir o conteúdo a uma variável
		content = data;
		console.log(content); // O conteúdo da página será exibido no console
	})
	// output.innerHTML = `${response}`
}
getSource("https://www.freecodecamp.org/portuguese/news/o-guia-definitivo-para-web-scraping-com-node-js/")