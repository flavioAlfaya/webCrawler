$( document ).ready(function() {
    $('#send').click(()=>{
        let search = $('#search').val()
        let limit = $('#limit').val()
        if(search.length <= 0 || limit.length <= 0){
            sendError('Preencha os campos. Sua requisição não pode ser feita sem dados.')
        }else{
            blockUI(true)
            loading(true)
            clearResponse()
            request(search,limit,(resposta)=>{
                resposta = jsonFormater(JSON.stringify(resposta))
                console.log(resposta)
                $('#responseArea').html(resposta)
            })
        }

    })
    $('#clear').click(()=>{
        clearResponse()
        clearInputs()
    })

    const blockUI = (state)=>{
        if(state){
            $('input').attr('disabled',true)
        }else{
            $('input').attr('disabled',false)
        }
    }
    const loading = (state)=>{
        if(state){
            $('#loading').css('display','flex')
        }else{
            $('#loading').css('display','none')
        }
    }
    const request = (search,limit,callback)=>{
        $.post( "/produtos", { search,limit })
        .done(function( data ) {
            blockUI(false)
            loading(false)
            if (typeof callback == "function") 
                callback(data); 
        })
        .fail(()=>{
            blockUI(false)
            loading(false)
        })
    }
    const jsonFormater = (data)=>{
        var jsonObj = JSON.parse(data);
        var jsonPretty = JSON.stringify(jsonObj, null, '\t');
        return jsonPretty
    }
    const sendError = (msg)=>{
        Swal.fire({
            title: 'Erro',
            text: msg,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
    const clearResponse =()=>{
        $('#responseArea').html('')
    }
    const clearInputs = () =>{
        $('#search').val('')
        $('#limit').val('')
    }
});
