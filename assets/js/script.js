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
                        '<td class="id_user">'+item.id+'</td>'+
                        '<td>'+item.nome+'</td>'+
                        '<td>'+item.email+'</td>'+
                        '<td><span>'+item.rua+', '+item.numero+'</span><span>'+item.bairro+'</span><span>'+item.cep+'</span><span>'+item.cidade+' ('+item.uf+')</span></td>'+
                        '<td>'+item.telefone+'</td>'+
                        '<td class="text-center">'+
                            '<button type="submit" class="btn btn-success"><span class="material-symbols-outlined editar">edit</span></button>'+
                            '<button type="submit" class="btn btn-danger"><span class="material-symbols-outlined deletar">delete</span></button>'+
                        '</td>'+
                    '</tr>'
                    );
                });

            }
            
        });
        setTimeout(function(){
            $('.editar').on('click', function(){
                var id_user = $(this).parents('tr').find(' > .id_user').text();
                alert(id_user);
        
            });
        }, 1000);
    });

    
   /*  $('.cadastrar').on('click', function(){
        console.log("aqui!");
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
        
        // Cadastrar 
        $.ajax({
            url: "https://estagio.eficazmarketing.com/api/user/",
            type: "POST",
           // dataType: "json",
            data: {dados},
            beforeSend : function(){
                console.log("ENVIANDO...");
            },         
        }).done(function(mensagem){
            console.log(mensagem);
        }).fail(function(jqXHR, textStatus, mensagem){
            alert(mensagem)
        });
    }); */
});