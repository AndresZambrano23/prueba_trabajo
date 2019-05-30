import $ from 'jquery';




$(document).ready(function(){
    $("#Ingresar").click(function(){
        var username = $("#username").val();
        var password = $("#password").val();

        var array = {
            "username": username ,
	        "password": password
        }

        var dato = JSON.stringify(array);


        $.ajax({
            url: "http://api-test.local/public/api/v1/auth/login",
            type: 'post',
            headers: {"Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYwN2UzZTliNDE5MmY0M2I2M2Y1YjE4Y2JjMGIwYTljNjc1YmEyNDI3N2MzY2MyNWMwNjI2NDdiNDczOTllMjcyOWIyNGM5N2E1MTllNDg4In0.eyJhdWQiOiI0IiwianRpIjoiZjA3ZTNlOWI0MTkyZjQzYjYzZjViMThjYmMwYjBhOWM2NzViYTI0Mjc3YzNjYzI1YzA2MjY0N2I0NzM5OWUyNzI5YjI0Yzk3YTUxOWU0ODgiLCJpYXQiOjE1NTY5MjA1NDIsIm5iZiI6MTU1NjkyMDU0MiwiZXhwIjoxNTU4MjE2NTQxLCJzdWIiOiIiLCJzY29wZXMiOltdfQ.jkrVOrduB1dEtbM4GJjs1JAQm_sdQu3yZLwfGQuW8eqQoxRMdCO01LGFYnR2IUvmaAj6hjRuzFjxXpkcFCv0rnFXfzuQaaBeyJ88iuzF6qyt5SDvqbOgua-G5vLSWZEe7_pPWWuek5r7WC3r4sudSGlqr4kMCLcB31z_ZDNxFIuGV0ERkAqk-0dWZBzgNbG5vIRHkgouq2PFxJObC9UG9kNPqTyPM1UFKZHS3-POFsVSJqOHBvHhJLUrE2PJTgWDXRg5OERadYHjWCUpN_uoGRNJc7oNOwHASLWbrKykmRZgp3XuV3jcrMcLuw9hMKz9Xsb18huLKNsB6k2ZlpQ5vfJzHm8s2_zcYGZrga-tTsJtP4ilYZUSQL6m-ty9XaYqtXTXsrRHcbGETfL8rus24IKlAHy-W6vIkmGSKoezO6PF6BCBFPSB4JK-il6jZ6BX2rwlmM-gzmiUZe-EZDnIv6Aqx1rdgVYpaVBpteT0RfVtWy8r3_NFOj7QvyvF-RA_ijpDTI43gWrYq6T_5aA6RXnkUyv44ALCX4wUVDq57tYFlwDo0QWt7yHPAsh8nsaR-ev42ioNGJoMbPIEtV22u_iab745gxUqtuPSFKmlLDQnjMUXEXoWGzPy6qdcwlVuTNwtchbDJX2trYRL3UwJiZ2GnLn_iP3lsjo4i9H7Te0", 
            "Cookie": "{{debug}}", "contentType": "application/json" },
            dataType: 'json',
            data: dato,
            success: function (datos) {
                $.each(datos , function(i, elemento){
                    if(elemento == "accessToken"){

                        alert("Bienvenido usuario")
                        window.location.href="paginas";
                    }else
                    if(elemento == "message"){
                        alert("Correo Electrónico y/o Contraseña Incorrecta!.");
                    }
                })
            },
            error: function (err) {
                alert("no funciona " + err);
                window.location.href="paginas";
            }

        });

    })
});