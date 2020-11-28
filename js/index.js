const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Verludaria de Carlitos',
        frutas: [
            { nombre: 'Manzana', cantidad: 50},
        ],
        nuevaFruta: '',
        nuevaCantidad: 0,
        total: 0
    },
    methods: {
        agregarFruta() {
            if (this.nuevaFruta && this.nuevaCantidad ){
                this.frutas.push({ nombre: this.nuevaFruta, cantidad: this.nuevaCantidad });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
            }else{
                window.alert('Error al los colocar datos')
            }            
        },
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total += parseInt(fruta.cantidad);
            }
            return this.total;
        },
    },
})
/* 
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Verludaria de Carlitos',
        frutas: [
            { nombre: 'Manzana', cantidad: 50},
        ],
        nuevaFruta: '',
        nuevaCantidad: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            if (this.nuevaFruta && this.nuevaCantidad ){
                this.frutas.push({ nombre: this.nuevaFruta, cantidad: this.nuevaCantidad });
                this.nuevaFruta = '';
                this.nuevaCantidad = null;
            }else{
                window.alert('Falta rellenar datos')
            }
        },
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return total;
        },
    },
})
*/
