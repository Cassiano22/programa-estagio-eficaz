$(document).ready(function(){
    $('.aba-cadastro').on('click', function(){
        if(!$('.cadastro.wrapper').hasClass('show')){
            $(this).addClass('active');
            $('.cadastro.wrapper').addClass('show');
            $('.lista.wrapper').removeClass('show');
            $('.aba-lista').removeClass('active');
        }
        
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
    });

    $('.cadastrar').on('click', function(){
        var dados = [];
        $('.formulario-cadastro input').each(function(k){
            var name = $(this).attr('name');
            dados[name] = $(this).val();
            if(dados[name] == '' && name != 'complemento'){
                $(this).focus();
                console.log("Aqui!");
                return false;
            }
        });
        
            
        
        $.post(
            "https://estagio.eficazmarketing.com/api/user/", //Required URL of the page on server
            dados,
            function(response,status)
            {
               console.log(response);
               console.log(status);  	
            }
         );
        // Cadastrar 
        /* $.ajax({
            url: "https://estagio.eficazmarketing.com/api/user/",
            type: "POST",
            dataType: "json",
            data: dados,
            success: console.log('Cadastrado com sucesso!')
            
            
        }); */
		/*$.ajax({
                method: "POST",
                url: "/web_api/cart/",
                contentType: "application/json; charset=utf-8",
                data: '{"Cart":{'+dados+'}}',
                beforeSend: function(){
                    console.log(dados);
                }
            }).done(function(data){
                
                console.log("Produto adicionado!");
                
                // Update carrinho 
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
                    
                });
    
            });*/
    });
});