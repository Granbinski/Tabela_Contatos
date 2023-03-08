const formContato = document.querySelector("#form-contato");
const tabelaContatos = document.querySelector("#tabela-contatos tbody");

formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = formContato.nome.value;
  const telefone = formContato.telefone.value;

  const novaLinha = tabelaContatos.insertRow();
  const celulaNome = novaLinha.insertCell();
  celulaNome.textContent = nome;
  const celulaTelefone = novaLinha.insertCell();
  celulaTelefone.textContent = telefone;

  formContato.reset();
  alert("Contato cadastrado com sucesso!");
});
