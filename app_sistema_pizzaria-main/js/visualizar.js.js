document.addEventListener("DOMContentLoaded", function() {
    const pizzaContainer = document.getElementById('pizza-container');

    const pizzas = [
        { id: 1, nome: "Margherita", ingredientes: "Molho de tomate, queijo, manjericão", preco: "R$ 25,00" },
        { id: 2, nome: "Pepperoni", ingredientes: "Molho de tomate, queijo, pepperoni", preco: "R$ 30,00" },
        { id: 3, nome: "Quatro Queijos", ingredientes: "Muçarela, gorgonzola, parmesão, provolone", preco: "R$ 35,00" },
        { id: 4, nome: "Frango com Catupiry", ingredientes: "Frango, catupiry, milho", preco: "R$ 28,00" },
    ];

    function exibirPizzas() {
        pizzas.forEach(pizza => {
            const pizzaDiv = document.createElement('div');
            pizzaDiv.classList.add('pizza');
            pizzaDiv.innerHTML = `
                <h2>${pizza.nome}</h2>
                <p>Ingredientes: ${pizza.ingredientes}</p>
                <p>Preço: ${pizza.preco}</p>
            `;
            pizzaContainer.appendChild(pizzaDiv);
        });
    }

    exibirPizzas();
});
