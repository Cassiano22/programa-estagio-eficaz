<div class="alert alert-dismissible fade show mensagem" role="alert">
  <strong>Mensagem de ação</strong>
  <button type="button" class="btn-close"></button>
</div>
<div class="d-flex pt-3">
    <div class="menu-opcoes">
        <button type="button" class="aba-cadastro btn btn-primary btn-lg">Cadastrar</button>
        <button type="button" class="aba-lista btn btn-primary btn-lg">Listar</button>
    </div>
    <?php $this->load->view('formulario_cadastro'); ?>
    <?php $this->load->view('lista_cadastro'); ?>
</div>
