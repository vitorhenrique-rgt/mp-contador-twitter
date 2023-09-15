Construa um contador de caracteres diferenciado, assim como o utilizado pelo Twitter. Nesse mini projeto você irá utilizar apenas HTML, CSS e JavaScript para transformar um simples contador de caracteres em uma feature completa e interativa.

## 🔨 Requisitos

- Utilize apenas HTML, CSS e JavaScript.
- Crie um contador circular, de modo que a borda do círculo seja preenchida conforme o número de caracteres digitados:
  - O número máximo de caracteres é 280.
  - A borda do círculo deve ser preenchida de forma proporcional aos caracteres digitados. Por exemplo, se forem digitados 140 caracteres, 50% da borda do círculo deverá estar preenchida.
- Conforme o _input_ é preenchido, a borda do círculo deverá ser preenchida com a cor **azul**:
  - A partir de 260 caracteres digitados, a borda do círculo deverá se tornar **amarela** para indicar que o limite está próximo.
  - Se forem digitados 280 caracteres ou mais, a borda do círculo deverá estar totalmente preenchida e se tornar **vermelha**.

## 🔨 Desafio extra para quem quer ir além

- Exiba o número de caracteres que faltam para atingir o valor máximo:
  - O número deverá ser renderizado no centro do contador.
  - O número só poderá ser visível a partir de 260 caracteres digitados, ou seja, a partir da borda amarela.
  - Ao exceder o limite de caracteres, o valor apresentado deverá ser negativo, indicando quantos caracteres ultrapassaram o limite.

## 💻 Setup do projeto

O objetivo desse projeto é a construção do contador de caracteres. Por esse motivo, na _branch_ principal do repositório, você irá encontrar o projeto com o design inicial pronto. Seu trabalho será apenas implementar o contador.

### "Mas eu quero me desafiar e construir todo o design _do zero_"

Nesse caso, separamos uma _branch_ com o nome `blank_project` para você implementar a página do seu jeito!
Mas atenção: para que você tenha acesso a essa branch, na hora do fork no github você deverá desmarcar a opção "copiar apenas a _branch_ `main`".

## Deploy

- Faça o deploy da sua solução e submeta no Codante.

## 🔍 Dicas

- Estude sobre a criação de formas geométricas utilizando SVG com HTML e CSS.
- Entenda o funcionamento das propriedades `stroke-dasharray` e `stroke-dashoffset`.

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Gif

![Twitter counter](https://github.com/codante-io/mp-contador-twitter/assets/78622334/4806fa3f-df2f-488d-bffd-6cbfd674240a)

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1284525371882005951)

## 👉🏽 Sobre esse mini-projeto

### Tecnologias sugeridas

- HTML, CSS e JavaScript.

## ❓ FAQ

### Posso utilizar React ou outras bibliotecas?

Você pode utilizar as ferramentas que desejar para implementar esse projeto. Porém, o objetivo principal aqui é exercitar os fundamentos de HTML, CSS e JavaScript e a resolução oficial será implementa dessa maneira.

### Posso utilizar frameworks de estilo?

Sim! Apesar do objetivo principal desse projeto ser exercitar suas habilidades com CSS puro, fique à vontade para utilizar as ferramentas que desejar.
