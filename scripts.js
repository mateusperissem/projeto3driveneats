let controle = 0;

function selecionaItem(elemento, nomeClasse){
    const botaoClicado = document.querySelector(`.${nomeClasse} .selecionado`);
    const itemCheck = document.querySelector(`.${nomeClasse} .selecionado .botaocheck`);
    if (botaoClicado !== null){
        botaoClicado.classList.toggle("selecionado");
        itemCheck.classList.toggle("visivel");
        controle = controle - 1;
    }

    if(botaoClicado !== elemento){
        elemento.classList.add("selecionado");
        const itemCheck = document.querySelector(`.${nomeClasse} .selecionado .botaocheck`);
        itemCheck.classList.toggle("visivel");
        controle += 1;
    }

    verificaSeTemTresSelecionados();   
}

function verificaSeTemTresSelecionados(){
    //let lista = document.querySelectorAll(".selecionado");
    const fecharPedido = document.querySelector(".conteudoTopoDeBaixo");
    if(controle == 3){
        fecharPedido.classList.add("fecharPedido");
        fecharPedido.innerHTML = "Fechar pedido";
    } else{
        fecharPedido.classList.remove("fecharPedido");
        fecharPedido.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }   
}


function enviarProZap(){
    if (controle ==3){
        const prato = document.querySelector(".prato .selecionado h3").textContent;
        const bebida = document.querySelector(".bebida .selecionado h3").textContent;
        const sobremesa = document.querySelector(".sobremesa .selecionado h3").textContent;
        let custoPrato = document.querySelector(".prato .selecionado span").textContent;
        let custoBebida = document.querySelector(".bebida .selecionado span").textContent;
        let custoSobremesa = document.querySelector(".sobremesa .selecionado span").textContent;
        
        custoPrato = Number(custoPrato.replace(',','.'));
        custoBebida = Number(custoBebida.replace(",","."));
        custoSobremesa = Number(custoSobremesa.replace(",","."));
        let custoTotal = (custoPrato+custoBebida+custoSobremesa).toFixed(2);
        let msg1 = "https://wa.me/5521983538447?text="
        let msg2 = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \n  Total: 両 ${custoTotal}` 
        console.log(msg2);
        let encoded = encodeURIComponent(msg2);
        window.open(msg1+encoded, '_blank');
    }
    
    
}