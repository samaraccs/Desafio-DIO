class salarioTrabalhador {
	constructor(name, salarioLiquido, diasTrabalhados){
		this.name = name
		this.salarioLiquido = salarioLiquido
		this.diasTrabalhados = diasTrabalhados
	}

// beneficios
	adicionalInsalubridade(){
		return 1518 * 0.20 //20% do valor do salário mínimo
	}

	valeTransporte(){
		return 6.15 * 2 //ida e volta
	}

// calculo do salário sem descontos
	salarioSemDescontos(){
		return this.salarioLiquido + this.adicionalInsalubridade() + (this.valeTransporte() * this.diasTrabalhados)
	}

// calcular alíquota INSS
	calcularAliquota(salarioBruto){
		let aliquota;

		if (salarioBruto <= 1518.0){
			aliquota = salarioBruto * 0.075
		}
		else if (salarioBruto <= 2793.88){
			aliquota = salarioBruto * 0.09
		}
		else if (salarioBruto <= 4190.83){
			aliquota = salarioBruto * 0.12
		}
		else if (salarioBruto <= 8157.41){
			aliquota = salarioBruto * 0.14
		}

		return aliquota
	}

// salário final
	salarioFinal(){
		const salarioBruto = this.salarioSemDescontos()
		const aliquotaINSS = this.calcularAliquota(salarioBruto)
		const descontoVT = this.salarioLiquido * 0.06
		const convenioMedico = 49.90
		return salarioBruto - aliquotaINSS - descontoVT - convenioMedico
	}

// exibição final
escrever(){
		console.log("Dados do Funcionário:")
        console.log(`- Nome: ${this.name}`)
		console.log(`- Salário Líquido: R$ ${this.salarioLiquido.toFixed(2)}`)
		console.log(`- Dias Trabalhados: ${this.diasTrabalhados}`)
        console.log("===========================================================")
		console.log(`O funcionário(a) ${this.name} recebe o salário final de R$ ${this.salarioFinal().toFixed(2)}`)
}

}

//instanciando
const dadosFuncionario = new salarioTrabalhador("Júlia", 3500, 22)
dadosFuncionario.escrever()
