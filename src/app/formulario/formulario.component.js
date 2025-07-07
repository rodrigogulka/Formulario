document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-cadastro');
  const lista = document.getElementById('alunos');
  const mensagem = document.getElementById('mensagem');
  const idadeSelect = document.getElementById('idade');

  // Preenche o select de idade (18 a 100)
  if (idadeSelect && idadeSelect.options.length <= 1) {
    for (let i = 18; i <= 100; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      idadeSelect.appendChild(option);
    }
  }

  // Carrega alunos do localStorage
  function carregarAlunos() {
    const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    if (!lista) return;
    lista.innerHTML = '';
    alunos.forEach(aluno => {
      const li = document.createElement('li');
      li.className = 'text-black list-disc ml-5';
      li.textContent = `${aluno.nome} - ${aluno.idade} anos - ${aluno.curso} (${aluno.dataInicio} a ${aluno.dataTermino})`;
      lista.appendChild(li);
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome')?.value.trim();
      const idade = document.getElementById('idade')?.value;
      const curso = document.getElementById('curso')?.value.trim();
      const dataInicio = document.getElementById('dataInicio')?.value;
      const dataTermino = document.getElementById('dataTermino')?.value;

      if (!nome || !idade || !curso || !dataInicio || !dataTermino) {
        if (mensagem) {
          mensagem.textContent = 'Por favor, preencha todos os campos.';
          mensagem.className = 'text-red-600 font-semibold mt-4';
        }
        return;
      }

      if (dataTermino <= dataInicio) {
        if (mensagem) {
          mensagem.textContent = 'A Data de Término não pode ser anterior ou igual à Data de Início';
          mensagem.className = 'text-red-600 font-semibold mt-4';
        }
        return;
      }

      const novoAluno = { nome, idade, curso, dataInicio, dataTermino };
      const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
      alunos.push(novoAluno);
      localStorage.setItem('alunos', JSON.stringify(alunos));

      if (mensagem) {
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.className = 'text-green-600 font-semibold mt-4';
      }

      form.reset();
      carregarAlunos();

      setTimeout(() => {
        if (mensagem) mensagem.textContent = '';
      }, 4000);

      document.getElementById('lista-alunos')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  carregarAlunos();
});
