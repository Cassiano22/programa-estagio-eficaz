<div class="d-flex">
    <div class="menu-opcoes">
        <button type="button" class="aba-cadastro btn btn-primary btn-lg">Cadastrar</button>
        <button type="button" class="aba-lista btn btn-primary btn-lg">Listar</button>
    </div>
    <?php $this->load->view('formulario_cadastro'); ?>
    <?php $this->load->view('lista_cadastro'); ?>
</div>
