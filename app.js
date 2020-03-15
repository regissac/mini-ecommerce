const vm = new Vue({
    el: "#app",
    data: {
        produtos: [],
        produto: false
    },
    filters: {
        numeroDinheiro(valor) {
            return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
        }
    },
    methods: {
        fetchProdutos() {
            fetch("./api/produtos.json")
                .then(r => r.json())
                .then(r => {
                    this.produtos = r;
                })
        },
        fetchProduto(id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then(r => r.json())
                .then(r => {
                    this.produto = r;
                })
        }
    },
    created() {
        this.fetchProdutos();
    }
})