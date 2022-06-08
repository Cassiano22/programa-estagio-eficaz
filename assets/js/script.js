$(document).ready(function(){

    $.ajax({
        url: "https://estagio.eficazmarketing.com/api/user/",
        type: "GET",
        dataType: "json",
        success: function(data){
            $(data).each(function(k, item){
                $('.table tbody').append(
                '<tr>'+
                    '<td class="id_user">'+item.id+'</td>'+
                    '<td>'+item.nome+'</td>'+
                    '<td>'+item.email+'</td>'+
                    '<td><span>'+item.rua+', '+item.numero+'</span><span>'+item.bairro+'</span><span>'+item.cep+'</span><span>'+item.cidade+' ('+item.uf+')</span></td>'+
                    '<td>'+item.telefone+'</td>'+
                    '<td class="text-center">'+
                        '<button type="button" class="btn btn-success"><span class="material-symbols-outlined">edit</span></button>'+
                        '<button type="button" class="btn btn-danger"><span class="material-symbols-outlined">delete</span></button>'+
                    '</td>'+
                '</tr>'
                );
            });
        }
    });

    setTimeout(function(){
        var maior = 0;
        $('.id_user').each(function(){
            var id_user = $(this).text();
            if(maior < id_user){
                maior = id_user;
            }
        });
        maior++;
        $('.cadastro .formulario-cadastro #id').val(maior);
           

    }, 1000);


    $('.aba-cadastro').on('click', function(){
        $('.cadastro .titulo').text('Formulário de Cadastro');
        $('.formulario-cadastro .cadastrar').show();
        $('.formulario-cadastro .salvar').hide();
        $('.formulario-cadastro div input').each(function(){
            $(this).val('');
        });

        if(!$('.cadastro.wrapper').hasClass('show')){
            $(this).addClass('active');
            $('.cadastro.wrapper').addClass('show');
            $('.lista.wrapper').removeClass('show');
            $('.aba-lista').removeClass('active');
        }
        $('#cep').on('change', function(){
            var urlCep = "https://viacep.com.br/ws/"+$(this).val()+"/json";
            $.ajax({
                url: urlCep,
                type: "GET",
                dataType: "json",
                success: function(data){
                    $(data).each(function(k, item){
                        $('#rua').val(item.logradouro);
                        $('#bairro').val(item.bairro);
                        $('#cidade').val(item.localidade);
                        $('#uf').val(item.uf);
                    });
                }
            });
        });
        
    });

    $('.aba-lista').on('click', function(){
        if(!$('.lista.wrapper').hasClass('show')){
            $(this).addClass('active');
            $('.lista.wrapper').addClass('show');
            $('.cadastro.wrapper').removeClass('show');
            $('.aba-cadastro').removeClass('active');
        }
        $('.table tbody').empty();
        // Get All Users
        $.ajax({
            url: "https://estagio.eficazmarketing.com/api/user/",
            type: "GET",
            dataType: "json",
            success: function(data){
                $(data).each(function(k, item){
                    $('.table tbody').append(
                    '<tr>'+
                        '<td class="id_user">'+item.id+'</td>'+
                        '<td>'+item.nome+'</td>'+
                        '<td>'+item.email+'</td>'+
                        '<td><span>'+item.rua+', '+item.numero+'</span><span>'+item.bairro+'</span><span>'+item.cep+'</span><span>'+item.cidade+' ('+item.uf+')</span></td>'+
                        '<td>'+item.telefone+'</td>'+
                        '<td class="text-center">'+
                            '<button type="button" class="btn btn-success editar"><span class="material-symbols-outlined">edit</span></button>'+
                            '<button type="button" class="btn btn-danger modal-deletar" data-bs-toggle="modal" data-bs-target="#deletar"><span class="material-symbols-outlined">delete</span></button>'+
                        '</td>'+
                    '</tr>'
                    );
                });
            }
        });
        
        setTimeout(function(){ 
            var id = '';
            $('.modal-deletar').on('click', function(){
                id = $(this).parents('tr').find('.id_user').text();
            });
            // Delete User
            $('.deletar').on('click', function(){
                $.ajax({
                    url: "https://estagio.eficazmarketing.com/api/user/"+id,
                    type: "DELETE",
                    dataType: "json",
                    success: function(data){
                        $(data).each(function(k, item){
                            $('.mensagem').addClass('alert-success');
                            $('.mensagem strong').text(item.message);
                            $('.mensagem').show();
                        });
                    }
                });
                
                $('.table tbody tr .id_user').each(function(){
                    if(id == $(this).text()){
                        $(this).parents('tr').fadeOut(1500);
                    }
                });
                
            });

            // Edit User
            $('.editar').on('click', function(){
                var id = $(this).parents('tr').find('.id_user').text();
                console.log(id);
                $.ajax({
                    url: "https://estagio.eficazmarketing.com/api/user/"+id,
                    type: "GET",
                    dataType: "json",
                    success: function(data){
                        $(data).each(function(k, item){
                            $('.formulario-cadastro #nome').val(item.nome);
                            $('.formulario-cadastro #seu_email').val(item.seu_email);
                            $('.formulario-cadastro #email').val(item.email);
                            $('.formulario-cadastro #telefone').val(item.telefone);
                            $('.formulario-cadastro #cep').val(item.cep);
                            $('.formulario-cadastro #rua').val(item.rua);
                            $('.formulario-cadastro #bairro').val(item.bairro);
                            $('.formulario-cadastro #numero').val(item.numero);
                            $('.formulario-cadastro #complemento').val(item.complemento);
                            $('.formulario-cadastro #cidade').val(item.cidade);
                            $('.formulario-cadastro #uf').val(item.uf);
                            $('.cadastro .titulo').text('Editar Usuário');
                            $('.formulario-cadastro .cadastrar').hide();
                            $('.formulario-cadastro .salvar').show();
                            $('.cadastro.wrapper').addClass('show');
                            $('.lista.wrapper').removeClass('show');
                        });
                    }
                });

                $('#cep').on('change', function(){
                    var urlCep = "https://viacep.com.br/ws/"+$(this).val()+"/json";
                    $.ajax({
                        url: urlCep,
                        type: "GET",
                        dataType: "json",
                        success: function(data){
                            $(data).each(function(k, item){
                                $('#rua').val(item.logradouro);
                                $('#bairro').val(item.bairro);
                                $('#cidade').val(item.localidade);
                                $('#uf').val(item.uf);
                            });
                        }
                    });
                });

                $('.salvar').on('click', function(){
                    var dados = '"id":'+id;
                    var cont = 0;
                    $('.formulario-cadastro input').each(function(){
                        var name = $(this).attr('name');
                        var valor = $(this).val();
                        if(valor == '' && name != 'complemento'){
                            $(this).focus();
                            return false;
                        }

                        dados = dados+',"'+name+'":'+'"'+valor+'"';

                        cont++;
                    });
                    
                    if(cont >= 9){
                        
                        $.ajax({
                            method: "PUT",
                            url: "https://estagio.eficazmarketing.com/api/user/"+id,
                            contentType: "application/json; charset=utf-8",
                            data: '{'+dados+'}',
                            beforeSend: function(){
                                console.log("Editando..");
                            }
                        }).done(function(data){
                            
                            $('.mensagem').addClass('alert-success');
                            $('.mensagem strong').text(data.message);
                            $('.mensagem').show();

                             
                        });
                    }
                });
            });

        }, 1000);
    });

    $('.cadastrar').on('click', function(){
        var dados = '"id":'+$('.formulario-cadastro #id').val();
        var cont = 0;
        $('.formulario-cadastro input').each(function(){
            var name = $(this).attr('name');
            var valor = $(this).val();
            if(valor == '' && name != 'complemento'){
                $(this).focus();
                return false;
            }

            dados = dados+',"'+name+'":'+'"'+valor+'"';

            cont++;
        });
        
        if(cont >= 9){
            
            $.ajax({
                method: "POST",
                url: "https://estagio.eficazmarketing.com/api/user/",
                contentType: "application/json; charset=utf-8",
                data: '{'+dados+'}',
                beforeSend: function(){
                    console.log("Cadastrando..");
                }
            }).done(function(data){
                
                $('.mensagem').addClass('alert-success');
                $('.mensagem strong').text(data.message);
                $('.mensagem').show();

                $('.formulario-cadastro div input').each(function(){
                    $(this).val('');
                });

            });
        }
    });

    $('.btn-close').on('click', function(){
        $(this).parents('.alert').hide();
    });

    
    
    
});