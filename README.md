# Dashboard Restaurante

**Sobre a aplicação**

O projeto consiste em ambiente com fluxo de pedido de um restaurante. Na área principal pode-se encontrar os pratos mais populares, nos quais podemos selecionar e adicionar ao pedido que vai somando o valor de forma acumulativa a medida que os pratos vão sendo inseridos e podemos ver antes de confirmar.

Após a confirmação do pedido a aplicação envia as refeições selecionadas para a área da cozinha, onde será a parte do preparo. Quando cada alimento for finalizado a cozinha vai dando baixa e imediatamente será enviado para a área de retirada, que nada mais é que o final do processo, onde quando o entregador ou garçom retirarem o prato também poderá ser dado baixa.

**Rascunho layout/wireframe do Layout da aplicação feita no figma:**

[https://www.figma.com/file/zRDDgVCloZGHdDrs2y2Lzk/Food-Dashboard?node-id=0%3A1](https://www.figma.com/file/zRDDgVCloZGHdDrs2y2Lzk/Food-Dashboard?node-id=0%3A1)

**Ferramentas utilizadas:**

- A aplicação foi desenvolvida utilizando reactjs e typescript.
- Estilizada com styled-components.
- Utilizando também as bibliotecas: react-icons e polished.
- Foi criado uma API simples para consumo das informações utilizando Dato-cms.
- Foram usados os Hooks do react para controle de estado, inicialização e controle de consumo da API e contexto da aplicação.

**Observações / Melhorias a serem feitas**

A aplicação ainda necessita de algumas melhorias que foram detectadas e podem ser implementadas para o resultado final, pois houve um pouco de atraso no desenvolvimento, são elas:

Adicionar um ID dinâmico em cada item, fazendo com que sejam únicos mesmo que sejam adicionados mais de uma vez ao pedido. Algo pensado foi a biblioteca uuid, pois ser bem estável.

Adicionar os itens via input para facilitar a experiencia do usuário, adicionando também um auto-complete que auxilia na escolha do prato.

Validações: Botões para apenas habilitar quando o usuário tiver pedido, confirmação na hora de excluir um item ou cancelar um pedido.

## Como executar

Abra o terminal e copie o repositório

```bash
git clone https://github.com/hellzz13/dashboard-food.git
```

Após copiar, e acessar o diretório da aplicação podemos, será necessário rodar o comando abaixo para instalar as dependências do projeto

```bash
npm install
```

Agora para que possa rodar o projeto será necessário rodar o comando

```bash
npm start
```

E será criado um [localhost](http://localhost) na porta 3000, que podemos acessar no link : [http://localhost:3000/](http://localhost:3000/)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
