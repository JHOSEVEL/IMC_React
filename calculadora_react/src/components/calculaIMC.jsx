import styles from './components/CalculaIMC.css'

const IMCCalculado = ({ altura, peso }) => {
    const verificaCampos = () => {
        if (!altura || !peso || altura === '' || peso === '') {
            return `Adicione valores aos dois campos!`
        }
        return null
    }

    const calculaIMC = () => {
        const alturaEmCm = parseInt(altura.replace(',', '.').trim())
        const pesoEmKg = parseInt(peso.replace(',', '.').trim())

        if (isNaN(alturaEmCm) || isNaN(pesoEmKg) || alturaEmCm <= 0 || pesoEmKg <= 0) {
            return null
        }

        const alturaEmMetros = alturaEmCm / 100
        const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros)

        if (imc >= 50) {
            return `Erro! Coloque um valor em centímetros!`
        } else {
            return imc.toFixed(1);
        }

    }

    const tabelaImc = [
        { limite: 18.5, classificacao: `Você está abaixo do peso. Aqui, Sugiro se alimentar bem!`, cor: styles.baixoPeso },
        { limite: 24.9, classificacao: `Você está com peso normal, Mantenha-se sempre com disposição e faça muito exercicio!`, cor: styles.pesoNormal },
        { limite: 29.9, classificacao: `Você está com sobrepeso, se alimente melhor e faça atividade fisica!`, cor: styles.sobrepeso },
        { limite: 34.9, classificacao: `Você está com obesidade grau I, Busque um medico`, cor: styles.obesidadeI },
        { limite: 39.9, classificacao: `Você está com obesidade grau II,Procure seu medico o quanto antes.`, cor: styles.obesidadeII },
        { limite: 40, classificacao: `Você está com obesidade grau III, Faça exames medicos antes que seja tarde.`, cor: styles.obesidadeIII },
    ]

    const erro = verificaCampos()
    const imc = calculaIMC()

    return (
        <>
            {erro && <h2>{erro}</h2>}
            {typeof imc === 'string' && imc.includes('Erro') ? (
                <h2>{imc}</h2>
            ) : (
                imc && (
                    <>
                        <h2>Seu IMC é: {imc}</h2>
                        <ul>
                            {tabelaImc.map(({ classificacao, cor, limite }) => (
                                <li key={limite} className={cor}>
                                    <p>
                                        Se seu IMC é ≥ {limite}
                                    </p>
                                    <p>
                                        {classificacao}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </>
                )
            )}
        </>
    )
}


export default IMCCalculado