<div class="lista wrapper">
    <div class="container">
        <h2 class="titulo"> Lista de Cadastrados </h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Endereço completo</th>
                    <th>Telefone</th>
                    <th class="text-center">Ação</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td class="id_user">01</td>
                <td>Cassiano Tolentino Russo</td>
                <td>cassianorusso02@gmail.com</td>
                <td><span>Rua Tereza FOntanelli, 69</span><span>Jd. dos Lírios</span><span>17509-340</span><span>Marília (SP)</span></td>
                <td>14997888222</td>
                <td class="text-center">
                    <button type="submit" class="btn btn-success editar"><span class="material-symbols-outlined">edit</span></button>
                    <button type="submit" class="btn btn-danger modal-deletar" data-bs-toggle="modal" data-bs-target="#deletar"><span class="material-symbols-outlined">delete</span></button>
                </td>
            </tr>
            </tbody>
        </table>
        <!-- Modal -->
        <div class="modal fade" id="deletar" tabindex="-1" aria-labelledby="deletarLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deletarLabel">Deseja excluir?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Clique em "Sim" para excluir esse usuário.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                <button type="button" class="btn btn-primary deletar" data-bs-dismiss="modal">Sim</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>