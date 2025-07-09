document.addEventListener('DOMContentLoaded', () => {
  const listaContainer = document.getElementById('listaAlunos');
  const mensagem = document.getElementById('mensagem');

  function carregarAlunos() {
    const dados = localStorage.getItem('alunos');
    return dados ? JSON.parse(dados) : [];
  }

  function salvarAlunos(alunos) {
    localStorage.setItem('alunos', JSON.stringify(alunos));
  }

  function excluirAluno(index) {
    const alunos = carregarAlunos();
    alunos.splice(index, 1);
    salvarAlunos(alunos);
    renderizarAlunos();
    mostrarMensagem('Cadastro excluído com sucesso!');
  }

  function mostrarMensagem(texto) {
    mensagem.textContent = texto;
    mensagem.classList.remove('hidden');
    setTimeout(() => mensagem.classList.add('hidden'), 3000);
  }

  function renderizarAlunos() {
    const alunos = carregarAlunos();
    listaContainer.innerHTML = '';

    if (alunos.length === 0) {
      listaContainer.innerHTML = '<p class="text-center text-gray-600">Nenhum aluno cadastrado.</p>';
      return;
    }

    alunos.forEach((aluno, index) => {
      const div = document.createElement('div');
      div.className = 'mb-6';
      div.innerHTML = `
        <p><strong>Nome Completo:</strong> ${aluno.nome}</p>
        <p><strong>Idade:</strong> ${aluno.idade}</p>
        <p><strong>Curso:</strong> ${aluno.curso}</p>
        <p><strong>Data de Início:</strong> ${formatarData(aluno.dataInicio)}</p>
        <p><strong>Data de Término:</strong> ${formatarData(aluno.dataTermino)}</p>
        <div class="mt-2">
          <button onclick="excluirAluno(${index})" class="text-red-600 hover:underline flex items-center gap-2">
            <strong>Excluir</strong>
          </button>
        </div>
        <hr class="my-4 border-gray-300" />
      `;
      listaContainer.appendChild(div);
    });
  }

  function formatarData(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR');
  }

  // Torna a função global para o botão onclick funcionar
  window.excluirAluno = excluirAluno;

  renderizarAlunos();
});
