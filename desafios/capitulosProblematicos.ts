var livro = [5,3,4,7];
// var livro = [6,6,6,6];
    //-> 5+1,5+1,5+1,5 
// var livro = [1,1,1,1,2,1,1,1,1,1,1,1,1,1,1]; //15
var prazo = 7;

function minimoDePaginas(capitulos: number[], dias: number): number {
    const maxCapitulo = Math.max(...capitulos);

    // Função para verificar se é possível completar todos os capítulos com o valor de páginas e dias fornecidos
    function podeDividir(capitulos: number[], dias: number, paginas: number): boolean {
        let diasRestantes = dias;

        for (let capitulo of capitulos) {
            let tempCapitulo = capitulo;
            while (tempCapitulo > 0) {
                tempCapitulo -= paginas;
                diasRestantes--;
                if (diasRestantes < 0) {
                    return false;
                }
            }
        }

        return diasRestantes >= 0;
    }

    // Tentar todos os valores possíveis de páginas de 1 até maxCapitulo
    for (let paginas = 1; paginas <= maxCapitulo; paginas++) {
        if (podeDividir(capitulos, dias, paginas)) {
            console.log(`capitulos: ${JSON.stringify(capitulos)}, dias: ${dias}, paginas: ${paginas}`);
            return paginas;
        }
    }

    console.log(`capitulos: ${JSON.stringify(capitulos)}, dias: ${dias}, paginas: -1`);
    return -1;
}


minimoDePaginas(livro, prazo);
