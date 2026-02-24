function adicionarTarefa() {  

      let inputTarefa = document.getElementById("inputTarefa")
      let dever = inputTarefa.value
      document.getElementById("mensagem").textContent = dever;
       

      let listaTa = document.getElementById("listaTa")
      let novaLI = document.createElement("li")

      novaLi.textContent = dever


      listaTa.appendChild(novaLi)

      inputTarefa.value = ""
    }
