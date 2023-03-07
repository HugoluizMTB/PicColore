const formEl = document.querySelector('form')
const tbodyEl = document.querySelector('tbody')
const tableEl = document.querySelector('table')

function submitClient(e) {

	e.preventDefault()
	const nome = document.getElementById('nome').value
	const cpf = document.getElementById('cpf').value
	const nomeCrianca = document.getElementById('nomeCrianca').value
	const tempoDesejado = document.getElementById('tempo').value
	let horaEntrada = new Date
	let minuto = ('0' + horaEntrada.getMinutes()).slice(-2)
	let hora = horaEntrada.getHours()
	horaEntrada = `${hora}:${minuto}`

	if (nome == "" || cpf == "" || nomeCrianca == "" || tempoDesejado == "") {
		window.alert('Campos Vazios!')
	} else {
		tbodyEl.innerHTML += `
		<tr>
			<td>${nome}</td>
			<td>${cpf}</td>
			<td>${nomeCrianca}</td>
			<td>${tempoDesejado}</td>
			<td>${horaEntrada}</td>
			<td><button class="btn btn-danger deleteBtn">Remover</button></td>
		</tr>
	`
	document.querySelector('form').reset()	
	}
}

function deleteRow(e) {
	if (!e.target.classList.contains("deleteBtn")) {
		return
	}
	
	const btn = e.target
	btn.closest('tr').remove()
}

formEl.addEventListener('submit', submitClient)
tableEl.addEventListener('click', deleteRow)