function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function receberEventoForm(evento) {
    evento.preventDefault();

    return {
      nome: form.querySelector(".nome").value,
      sobrenome: form.querySelector(".sobrenome").value,
      peso: form.querySelector(".peso").value,
      altura: form.querySelector(".altura").value,
    };
  }

  form.addEventListener("submit", function (evento) {
    const pessoa = receberEventoForm(evento);
    pessoas.push(pessoa);

    resultado.innerHTML += `
      <p>
        ${pessoa.nome}
        ${pessoa.sobrenome}
        ${pessoa.peso}
        ${pessoa.altura}
      </p>
    `;
  });
}

meuEscopo();
