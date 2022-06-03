<div class="cadastro wrapper">
    <div class="container">
        <h2 class="titulo"> Formulário de Cadastro </h2>
        <form class="formulario-cadastro row g-3">
            <div class="col-md-5">
                <label for="nome" class="form-label">Nome completo</label>
                <input type="text" class="form-control" id="nome" name="nome" placeholder="Digite seu nome" required>
            </div>
            <div class="col-md-5">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="exemplo@exemplo.com" required>
            </div>
            <div class="col-md-2">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="text" class="form-control" id="telefone" name="telefone" placeholder="DDD + Numero" required>
            </div>

            <div class="col-10">
                <label for="endereco" class="form-label">Endereço</label>
                <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua / Av." required>
            </div>
            <div class="col-2">
                <label for="numero" class="form-label">Número</label>
                <input type="text" class="form-control" id="numero" name="numero" placeholder="Nº" required>
            </div>

            <div class="col-md-6">
                <label for="bairro" class="form-label">Bairro</label>
                <input type="text" class="form-control" id="bairro" name="bairro" required>
            </div>
            <div class="col-md-6">
                <label for="complemento" class="form-label">Complemento</label>
                <input type="text" class="form-control" id="complemento" name="complemento" placeholder="Casa, Trabalho, Ap. etc.">
            </div>

            <div class="col-md-2">
                <label for="cep" class="form-label">CEP</label>
                <input type="text" class="form-control" id="cep" name="cep" placeholder="00000-000" required>
            </div>
            <div class="col-8">
                <label for="cidade" class="form-label">Município</label>
                <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Cidade" required>
            </div>
            <div class="col-2">
                <label for="estado" class="form-label">UF</label>
                <input type="text" class="form-control" id="estado" name="estado" maxlength="2" placeholder="Estado" required>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-info cadastrar">Cadastrar</button>
            </div>
            </form>
    </div>
</div>
