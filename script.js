var variavel = 0;
		function clicou(){
			var nome = window.document.getElementById('nome');
			var cpf = window.document.getElementById('cpf');
			var nomeCrianca = window.document.getElementById('nomeCrianca');
			var tempo = window.document.getElementById('tempo');
            var data = new Date;
            data = data.getHours() + ':' + data.getMinutes()
			variavel = variavel + 1;
			if(nome.value == "" || cpf.value == "" || nomeCrianca.value == "" || tempo.value == ""){
				window.alert("Campos vazios");
			}
			else{
				var tabela = window.document.getElementById('tabela');
				var linha = tabela.insertRow(variavel);
				var celula = linha.insertCell(0);
				var celula1 = linha.insertCell(1);
				var celula2 = linha.insertCell(2);
				var celula3 = linha.insertCell(3);
				var celula4 = linha.insertCell(4);
				var celula5 = linha.insertCell(5);
				var celula6 = linha.insertCell(6);
				celula.innerHTML = variavel;
				celula1.innerHTML = nome.value;
				celula2.innerHTML = cpf.value;
				celula3.innerHTML = nomeCrianca.value;
				celula4.innerHTML = tempo.value;
				celula5.innerHTML = data;
				celula6.innerHTML = "<button onclick='remover()' type='button' class='btn btn-danger'>Remover</button>";
				nome.value = "";
				cpf.value = "";
				nomeCrianca.value = "";
				tempo.value = "";
			}
		}
		function remover(){
			var tabela = window.document.getElementById('tabela');
			var linha = tabela.deleteRow(variavel);
			variavel = variavel - 1;
		}