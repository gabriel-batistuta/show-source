function getSource() {
    url = document.querySelector("input.source-url")
    output = document.querySelector("div.output-source")
    console.log(url)

    // source = fetch(`${url}`).then((response) => response.text());
    // console.log(source)
    fetch("view-source:" + url).then(
        function(response) {
            if (response.status !== 200) {
                message = ('Looks like there was a problem. Status Code: ' +
                response.status);
                output.innerHTML = message

                return message;
            }

            source = response.text();
            output.innerHTML = source
        }
    )
  .catch(function(err) {
    error = ('Fetch Error :-S', err);
    output.innerHTML = error
  });

}