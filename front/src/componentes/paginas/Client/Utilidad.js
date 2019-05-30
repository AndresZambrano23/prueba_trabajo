import $ from 'jquery';

$(document).ready(function(){

    /* LLamada a todos los datos  */
    /* Yo se que esto no va a funcionar por que no veo ningun servicio que llame todos los datos 
    sin embargo ahi me lo invente con el signo ?   */

    $.ajax({
        url: "http://api-test.local/public/api/v1/clients/:clientId",
        type: 'get',
        headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczM2VhNTFjMDA4YTlmYWUwODE5MTkzM2Q1OTRiNjhlMTk4Zjg1NjgxODVmNTRjMzVhOWRmMTQwMmM5NDNlY2E2NDY1NWJjOTlmOTUwMDU3In0.eyJhdWQiOiIzIiwianRpIjoiNzMzZWE1MWMwMDhhOWZhZTA4MTkxOTMzZDU5NGI2OGUxOThmODU2ODE4NWY1NGMzNWE5ZGYxNDAyYzk0M2VjYTY0NjU1YmM5OWY5NTAwNTciLCJpYXQiOjE1NTY5MjA5NTMsIm5iZiI6MTU1NjkyMDk1MywiZXhwIjoxNTg4NTQzMzUyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Eek5pmrXGQT7uvn0ZdPlSkToqzroIV-6AjMD-TK87859Mq9AYSLArDObmlBWXNGaUJTVwIKQ1CgzFjUkfsOkqQcgg6d5866Bv5L9gT7Ehq7Z2tx0qTLnDZGmZREF2rL4XBDVH8m4rFM7MB8En5XEFxXswD6BtBRWmVxxgCa_A46NZLQG9dDDECuT1E5yqqsEruG7KGJ42ZGkGG0HJkzGrc4CyTuLWBhuIMsG6MY6-ik0faTmTuQZNryGtRkOkkXtE5KPx5_j169s5Ml1u81j0h2ajuVUw_Z0RagxKmaB84ObH0cIvr7-ovTexHEummlgYSgFgRMr2vopppBNFI53f8gFcq8I2RT9QECMVyv1sEXhfzM5jhphjXs_3THM9Tm7VGGMJvDBq00MJoHvR6cC2cq3kMEXdJajN9b_rd-BtO24PAT38UuSHC3MYpM5I-IyP0IRm08qTIEV7HG8oTjsmNp1zvxLM24aLIkIn6xTCfEi4o8AprP6sWF4sjdZBGyfsbqWJ2gLlVY2g921Kf0CsmoMVaIY2WYyr2yOQQAPi4bWST-VEMOTi4yJFnRt8dgE3V4A_e7YFchrw__hxp5CLZTnpAzshW6POtsZN4_vYVJ5GR0x5AXIztnUp-wsSsqDVKkVlmLc_BQW0QWQsGDA9aXJXEAf30ZLYQCUbh8Xy3I", 
        "Cookie": "{{debug}}"},
        contentType: 'application/json',
        dataType: 'json',
        data: {
            "clientId": "?",
        },
        success: function (datos) {
            $.each(datos , function(i, elemento){
                $("#tbody").append(
                    "<tr className='table-secondary'><td>"+elemento.nombre+"</td><td>"
                    +elemento.sector+"</td><td> <input type='checkbox' className='custom-control-input' checked=''></td>"
                    +"<td><input type='radio' name='customRadio' className='custom-control-input' checked=''></td></tr>"
                )
            })
        },
        error: function (err) {
            alert("no funciona " + err);  
        }
    });





    $("#clientNew").click(function(){
        window.location.href="Client";
    })

    $("#delete").click(function(){
        var id = "3";



        $.ajax({
            url: "http://api-test.local/public/api/v1/clients/:clientId",
            type: 'delete',
            headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczM2VhNTFjMDA4YTlmYWUwODE5MTkzM2Q1OTRiNjhlMTk4Zjg1NjgxODVmNTRjMzVhOWRmMTQwMmM5NDNlY2E2NDY1NWJjOTlmOTUwMDU3In0.eyJhdWQiOiIzIiwianRpIjoiNzMzZWE1MWMwMDhhOWZhZTA4MTkxOTMzZDU5NGI2OGUxOThmODU2ODE4NWY1NGMzNWE5ZGYxNDAyYzk0M2VjYTY0NjU1YmM5OWY5NTAwNTciLCJpYXQiOjE1NTY5MjA5NTMsIm5iZiI6MTU1NjkyMDk1MywiZXhwIjoxNTg4NTQzMzUyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Eek5pmrXGQT7uvn0ZdPlSkToqzroIV-6AjMD-TK87859Mq9AYSLArDObmlBWXNGaUJTVwIKQ1CgzFjUkfsOkqQcgg6d5866Bv5L9gT7Ehq7Z2tx0qTLnDZGmZREF2rL4XBDVH8m4rFM7MB8En5XEFxXswD6BtBRWmVxxgCa_A46NZLQG9dDDECuT1E5yqqsEruG7KGJ42ZGkGG0HJkzGrc4CyTuLWBhuIMsG6MY6-ik0faTmTuQZNryGtRkOkkXtE5KPx5_j169s5Ml1u81j0h2ajuVUw_Z0RagxKmaB84ObH0cIvr7-ovTexHEummlgYSgFgRMr2vopppBNFI53f8gFcq8I2RT9QECMVyv1sEXhfzM5jhphjXs_3THM9Tm7VGGMJvDBq00MJoHvR6cC2cq3kMEXdJajN9b_rd-BtO24PAT38UuSHC3MYpM5I-IyP0IRm08qTIEV7HG8oTjsmNp1zvxLM24aLIkIn6xTCfEi4o8AprP6sWF4sjdZBGyfsbqWJ2gLlVY2g921Kf0CsmoMVaIY2WYyr2yOQQAPi4bWST-VEMOTi4yJFnRt8dgE3V4A_e7YFchrw__hxp5CLZTnpAzshW6POtsZN4_vYVJ5GR0x5AXIztnUp-wsSsqDVKkVlmLc_BQW0QWQsGDA9aXJXEAf30ZLYQCUbh8Xy3I", 
            "Cookie": "{{debug}}"},
            contentType: 'application/json',
            dataType: 'json',
            data: {
                "clientId": id,
            },
            success: function (datos) {
                $.each(datos , function(i, elemento){
                    if(elemento == "200"){

                        alert("Cliente eliminado correctamente.")
                        
                    }else
                    {
                        alert("Cliente No Existe!.");
                    }
                })
            },
            error: function (err) {
                alert("no funciona " + err);
                
            }
        });
    })

    $("#update").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var sector_id = $("#sector_id").val();
        var nit = $("#nit").val();
        var contact = $("#contact").val();

        var array= {
            "name": name,
            "email": email,
            "address" : address,
            "sector_id" : sector_id,
            "nit" : nit,
            "contact" :contact
        }

        var dato = JSON.stringify(array);

        $.ajax({
            url: "http://api-test.local/public/api/v1/clients/:clientId",
            type: 'put',
            headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczM2VhNTFjMDA4YTlmYWUwODE5MTkzM2Q1OTRiNjhlMTk4Zjg1NjgxODVmNTRjMzVhOWRmMTQwMmM5NDNlY2E2NDY1NWJjOTlmOTUwMDU3In0.eyJhdWQiOiIzIiwianRpIjoiNzMzZWE1MWMwMDhhOWZhZTA4MTkxOTMzZDU5NGI2OGUxOThmODU2ODE4NWY1NGMzNWE5ZGYxNDAyYzk0M2VjYTY0NjU1YmM5OWY5NTAwNTciLCJpYXQiOjE1NTY5MjA5NTMsIm5iZiI6MTU1NjkyMDk1MywiZXhwIjoxNTg4NTQzMzUyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Eek5pmrXGQT7uvn0ZdPlSkToqzroIV-6AjMD-TK87859Mq9AYSLArDObmlBWXNGaUJTVwIKQ1CgzFjUkfsOkqQcgg6d5866Bv5L9gT7Ehq7Z2tx0qTLnDZGmZREF2rL4XBDVH8m4rFM7MB8En5XEFxXswD6BtBRWmVxxgCa_A46NZLQG9dDDECuT1E5yqqsEruG7KGJ42ZGkGG0HJkzGrc4CyTuLWBhuIMsG6MY6-ik0faTmTuQZNryGtRkOkkXtE5KPx5_j169s5Ml1u81j0h2ajuVUw_Z0RagxKmaB84ObH0cIvr7-ovTexHEummlgYSgFgRMr2vopppBNFI53f8gFcq8I2RT9QECMVyv1sEXhfzM5jhphjXs_3THM9Tm7VGGMJvDBq00MJoHvR6cC2cq3kMEXdJajN9b_rd-BtO24PAT38UuSHC3MYpM5I-IyP0IRm08qTIEV7HG8oTjsmNp1zvxLM24aLIkIn6xTCfEi4o8AprP6sWF4sjdZBGyfsbqWJ2gLlVY2g921Kf0CsmoMVaIY2WYyr2yOQQAPi4bWST-VEMOTi4yJFnRt8dgE3V4A_e7YFchrw__hxp5CLZTnpAzshW6POtsZN4_vYVJ5GR0x5AXIztnUp-wsSsqDVKkVlmLc_BQW0QWQsGDA9aXJXEAf30ZLYQCUbh8Xy3I", 
            "Cookie": "{{debug}}"},
            contentType: 'application/json',
            dataType: 'json',
            data: dato,
            success: function (datos) {
                $.each(datos , function(i, elemento){
                    if(elemento == "200"){

                        alert("Cliente actualizado correctamente.")
                        
                    }else
                    {
                        alert("Cliente No Existe!.");
                    }
                })
            },
            error: function (err) {
                alert("no funciona " + err);
                
            }
        });
    })

    $("#atras").click(function(){
        window.location.href="Paginas";
    })
})