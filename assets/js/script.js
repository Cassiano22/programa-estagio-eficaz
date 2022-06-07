$(document).ready(function(){

    $.ajax({
        url: "https://estagio.eficazmarketing.com/api/user/",
        type: "GET",
        dataType: "json",
        success: function(data){
            $(data).each(function(k, item){
                console.log(item);
                $('.table tbody').append(
                '<tr>'+
                    '<td class="id_user">'+item.id+'</td>'+
                    '<td>'+item.nome+'</td>'+
                    '<td>'+item.email+'</td>'+
                    '<td><span>'+item.rua+', '+item.numero+'</span><span>'+item.bairro+'</span><span>'+item.cep+'</span><span>'+item.cidade+' ('+item.uf+')</span></td>'+
                    '<td>'+item.telefone+'</td>'+
                    '<td class="text-center">'+
                        '<button type="submit" class="btn btn-success"><span class="material-symbols-outlined">edit</span></button>'+
                        '<button type="submit" class="btn btn-danger"><span class="material-symbols-outlined">delete</span></button>'+
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
        // Get Users
        $.ajax({
            url: "https://estagio.eficazmarketing.com/api/user/",
            type: "GET",
            dataType: "json",
            success: function(data){
                $(data).each(function(k, item){
                    console.log(item);
                    $('.table tbody').append(
                    '<tr>'+
                        '<td class="id_user">'+item.id+'</td>'+
                        '<td>'+item.nome+'</td>'+
                        '<td>'+item.email+'</td>'+
                        '<td><span>'+item.rua+', '+item.numero+'</span><span>'+item.bairro+'</span><span>'+item.cep+'</span><span>'+item.cidade+' ('+item.uf+')</span></td>'+
                        '<td>'+item.telefone+'</td>'+
                        '<td class="text-center">'+
                            '<button type="submit" class="btn btn-success editar"><span class="material-symbols-outlined">edit</span></button>'+
                            '<button type="submit" class="btn btn-danger deletar"><span class="material-symbols-outlined">delete</span></button>'+
                        '</td>'+
                    '</tr>'
                    );
                });
            }
        });
        setTimeout(function(){ 
            $('.deletar').on('click', function(){
                var id = $(this).parents('tr').find('.id_user').text();
                $.ajax({
                    url: "https://estagio.eficazmarketing.com/api/user/"+id,
                    type: "DELETE",
                    dataType: "json",
                    success: function(data){
                        $(data).each(function(k, item){
                            alert(item.message);
                        });
                    }
                });
                $(this).parents('tr').fadeOut(1500);
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
                console.log("Campo obrigatório!");
                return false;
            }

            dados = dados+',"'+name+'":'+'"'+valor+'"';

            cont++;
        });
        
        if(cont >= 9){
            console.log(dados);
            $.ajax({
                method: "POST",
                url: "https://estagio.eficazmarketing.com/api/user/",
                contentType: "application/json; charset=utf-8",
                data: '{'+dados+'}',
                beforeSend: function(){
                    console.log(dados);
                }
            }).done(function(data){
                
                console.log("Usuário cadastrado!");
                
                /* // Update carrinho 
                var session = $('html').attr('data-session');
                $.ajax({
                    url: "/web_api/cart/"+session,
                    type: "GET",
                    dataType: "json",
                    beforeSend: function(){
                        console.log('Buscando produtos no carrinho...');
                    },
                    success: function (data) {
                        $.each(data, function(k, itens){
                            $.each(itens, function(i, item){
                                $('.carrinho-preview .carrinho-preview-body').append(
                                    '<div class="item-carrinho">'+
                                        '<a href="'+item.product_url['https']+'">'+
                                            '<div><img src="'+item.product_image['https']+'" width="90"><span>'+item.quantity+'</span></div>'+
                                            '<div>'+item.product_name+'</div>'+
                                            '<div>'+item.price+'</div>'+
                                        '</a>'+
                                    '</div>'
                                );
                            });
                        });
                    },
                    error: function(data){
                        alert("Não possui nenhum produto no carrinho!");
                    },
                    complete: function(){
                        console.log("Busca finalizada!");
                    }
                    
                }); */

            });
        }
    });
    
    
});