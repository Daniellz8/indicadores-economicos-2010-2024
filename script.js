const botaoOpcoes = document.getElementById('botao-opcoes');
const seletorOpcoes = document.getElementById('seletor-de-opcoes');
const conteudo = document.getElementById('conteudo');

const dadosAnuais = [
    { ano: 2010, salario: 'R$ 510.00', ipca: '5.91%' },
    { ano: 2011, salario: 'R$ 540.00', ipca: '6.50%' }, // Houve um reajuste em março para R$ 545,00. O valor de janeiro é o principal para o ano.
    { ano: 2012, salario: 'R$ 622.00', ipca: '5.84%' },
    { ano: 2013, salario: 'R$ 678.00', ipca: '5.91%' },
    { ano: 2014, salario: 'R$ 724.00', ipca: '6.41%' },
    { ano: 2015, salario: 'R$ 788.00', ipca: '10.67%' },
    { ano: 2016, salario: 'R$ 880.00', ipca: '6.29%' },
    { ano: 2017, salario: 'R$ 937.00', ipca: '2.95%' },
    { ano: 2018, salario: 'R$ 954.00', ipca: '3.75%' },
    { ano: 2019, salario: 'R$ 998.00', ipca: '4.31%' },
    { ano: 2020, salario: 'R$ 1.045.00', ipca: '4.52%' }, // Houve um reajuste em fevereiro para R$ 1.045,00. O valor de janeiro é o principal para o ano.
    { ano: 2021, salario: 'R$ 1.100.00', ipca: '10.06%' },
    { ano: 2022, salario: 'R$ 1.212.00', ipca: '5.79%' },
    { ano: 2023, salario: 'R$ 1.320.00', ipca: '4.62%' },
    { ano: 2024, salario: 'R$ 1.412.00', ipca: '4.83%' },
];

seletorOpcoes.addEventListener('change', () => {
    let valorSelecionado = seletorOpcoes.value;
    console.log(valorSelecionado);

    switch (valorSelecionado) {
        case 'opcao-1':
            console.log('1 - Listar os salários minímos de 2010 à 2024');
            let textoPrimeiraOpcao = '';
            for (let dados of dadosAnuais) {
                console.log(`Ano: ${dados.ano}, Salário: ${dados.salario} ;`);
                textoPrimeiraOpcao += `Ano:${dados.ano}, Salário: ${dados.salario} ;`;
            }
            textoPrimeiraOpcao = textoPrimeiraOpcao;
            conteudo.innerHTML = textoPrimeiraOpcao.replace(/;/g, '<br><br>');
            break;
        case 'opcao-2':
            console.log('2 - Listar o índice IPCA de 2010 à 2024');
            let textoSegundaOpcao = '';
            for (let dados of dadosAnuais) {
                console.log(`Ano: ${dados.ano}, IPCA: ${dados.ipca} ;`);
                textoSegundaOpcao += `Ano:${dados.ano}, IPCA: ${dados.ipca} ;`;
            }
            textoSegundaOpcao = textoSegundaOpcao;
            conteudo.innerHTML = textoSegundaOpcao.replace(/;/g, '<br><br>');
            break;
        case 'opcao-3':
            console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA');
            break;
        default:
            break;
    }
});
