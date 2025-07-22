document.addEventListener('DOMContentLoaded', () => {
  const listaContainer = document.getElementById('listaAlunos');
  const mensagem = document.getElementById('mensagem');

  const carregarAlunos = () => JSON.parse(localStorage.getItem('alunos')) || [];
  const salvarAlunos = alunos => localStorage.setItem('alunos', JSON.stringify(alunos));
  const formatarData = data => new Date(data).toLocaleDateString('pt-BR');

  window.excluirAluno = index => {
    const alunos = carregarAlunos();
    alunos.splice(index, 1);
    salvarAlunos(alunos);
    renderizarAlunos();
    mostrarMensagem('Cadastro Excluído!');
  };

  const mostrarMensagem = texto => {
    mensagem.textContent = texto;
    mensagem.classList.remove('hidden');
    setTimeout(() => mensagem.classList.add('hidden'), 3000);
  };

  // A parte renderizarAlunos vai puxar o que está salvo no localStorage e vai exibir dentro do container; se não tiver nada, mostra a mensagem

  const renderizarAlunos = () => {
    const alunos = carregarAlunos();
    listaContainer.innerHTML = alunos.length
      ? alunos.map((aluno, i) => `
        <div class="mb-6">
          ${aluno.nome} ${aluno.idade} ${aluno.curso}
          ${formatarData(aluno.dataInicio)} ${formatarData(aluno.dataTermino)}
          <div class="mt-2">
            <button onclick="excluirAluno(${i})" class="text-red-600 hover:underline flex items-center gap-2">
              <strong>Excluir</strong>
            </button>
          </div>
          <hr class="my-4 border-gray-300" />
        </div>
      `).join('')
      : '<p class="text-center text-gray-600">Nenhum aluno cadastrado.</p>';
  };

  renderizarAlunos();
});
