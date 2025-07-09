document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const idadeSelect = document.getElementById('idade');

  // Preencher idades de 18 a 100
  for (let i = 18; i <= 100; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    idadeSelect.appendChild(option);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const dataInicio = document.getElementById('dataInicio').value;
    const dataTermino = document.getElementById('dataTermino').value;

    if (dataTermino <= dataInicio) {
      alert('A data de término não pode ser anterior ou igual à de início.');
      return;
    }

    const aluno = {
      nome,
      idade,
      curso,
      dataInicio,
      dataTermino,
    };

    // Salva no localStorage
    const alunosSalvos = JSON.parse(localStorage.getItem('alunos')) || [];
    alunosSalvos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunosSalvos));

    alert('Aluno cadastrado com sucesso!');
    form.reset();
  });
});
