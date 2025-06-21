    //VARIÁVEIS E FÓRMULAS


    //DECLARANDO OBJETOS
    const obj_valor_imovel_preencher = document.querySelector('#valor-imovel-preencher')
    const obj_entrada_preencher = document.querySelector('#entrada-preencher')
    const obj_quantidade_parcelas = document.querySelector('#quantidade-parcelas')
    const obj_btn_finan = document.querySelector('#btn-finan')
    const obj_valor_imovel = document.querySelector('#valor-imovel')
    const obj_qtd_parcelas = document.querySelector('#qtd-parcelas')
    const obj_valor_parcelas = document.querySelector('#valor-parcelas')
    const obj_resultado_financiamento = document.querySelector('.resultado-financiamento')
    const obj_valor_total_financiamento = document.querySelector('#valor-total')
    let valor_entrada;

    //DECLARANDO EVENTOS
    obj_btn_finan.addEventListener('click', funFinanciamento)


    //DECLARANDO FUNCOES
    function funFinanciamento() {

        let valor_imovel = formatar(obj_valor_imovel_preencher.value);
        if (obj_entrada_preencher.value == ""){
            valor_entrada = 0;
        } else {
            valor_entrada = formatar(obj_entrada_preencher.value);
        }
        let n_parcelas = formatar(obj_quantidade_parcelas.value);
        let valor_final = valor_imovel - valor_entrada;
        let juros_anual = 10 / 100
        let juros_mes = ((1 + juros_anual) ** (1/12)) - 1
        let parcelaFinal = (valor_final * (((1 + juros_mes) ** n_parcelas) * juros_mes)) / (((1 + juros_mes) ** n_parcelas) - 1)

        obj_valor_imovel.innerHTML = valor_imovel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        obj_qtd_parcelas.innerHTML = n_parcelas
        obj_valor_parcelas.innerHTML = parcelaFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        obj_valor_total_financiamento.innerHTML = (parcelaFinal * n_parcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        if(valor_imovel > 0) {
            obj_resultado_financiamento.style.display = 'flex'
        }
        else {
            alert("Digite um valor de imóvel válido!")
            obj_resultado_financiamento.style.display = 'none'
        }

        if(obj_quantidade_parcelas.value == ''){
            alert("Escolha uma quantidade de parcelas");
            obj_resultado_financiamento.style.display = 'none';
        }

        if(valor_entrada > valor_imovel) {
            alert("A entrada não pode ser maior que o valor do imóvel!");
            obj_resultado_financiamento.style.display = 'none';
        }


    //funcao para formatar valores para o padrao que o js entende
        function formatar(n1){
            return parseFloat(n1.replace('.', '').replace(',', '.'));
        }
    }
