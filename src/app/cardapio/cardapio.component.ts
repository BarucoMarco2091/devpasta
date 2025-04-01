import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface CardapioItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {
  menuItems = [
    { name: 'Bife a Parmegiana', description: 'Contra-filé empanado, coberto com molho de tomate, mussarela derretida. Servido com arroz branco, batata frita e uma salada fresca.', price: 120.00, image: '/bifeparmegiana.webp' },
    { name: 'Canelone', description: 'Canelone é feito com tubos de massa recheados, cobertos com molho e queijo gratinado e presunto.', price: 110.00, image: '/canelone.webp' },
    { name: 'Canelone a Bolonhesa', description: 'Canelone é feito com tubos de massa recheados, cobertos com molho bolonhesa e queijo gratinado e presunto.', price: 115.00, image: '/canelonebolonhesa.webp' },
    { name: 'Canelone de Frango', description: 'Massa fininha e delicada, recheado com um cremoso frango desfiado, misturado com requeijão, temperado com alho dourado e molho de tomate.', price: 105.00, image: '/canelonefrango.webp' },
    { name: 'Capelleti de Frango', description: 'Massa fininha e delicada, recheado com um cremoso frango desfiado, misturado com catupiry, temperado com alho dourado e molho branco.', price: 125.00, image: '/capelettifrango.webp' },
    { name: 'Capelleti de Queijo', description: 'Massa fininha e delicada, recheado com ricota fresca escorrida, parmesão reggiano envelhecido e mussarela de búfala, temperado com alho dourado e molho branco.', price: 130.00, image: '/capelettiqueijo.webp' },
    { name: 'Frango a Parmegiana', description: 'Filé de frango empanado, coberto com molho de tomate, mussarela derretida. Servido com arroz branco, batata frita e uma salada fresca.', price: 120.00, image: '/frangoparmegiana.webp' },
    { name: 'Lasanha a Bolonhesa', description: 'Camadas de massa al dente, molho bolonhesa encorpado com patinho moído, mussarela derretida e presunto.', price: 125.00, image: '/lasanhabolonhesa.webp' },
    { name: 'Lasanha de Espinafre', description: 'Camadas de massa fresca intercaladas com espinafre refogado, ricota temperada e molho branco, finalizadas com queijo derretido. Acompanha salada verde e arroz branco.', price: 150.00, image: '/lasanhaespinafre.webp' },
    { name: 'Lasanha de Frango', description: 'Camadas de massa fresca intercaladas com frango desfiado refogado, ricota temperada e molho de tomate, finalizadas com queijo derretido. Acompanha salada verde e arroz branco.', price: 130.00, image: '/lasanhafrango.webp' },
    { name: 'Lasanha com Molho Branco', description: 'Camadas de massa fresca intercaladas com fatias de mussarela e presunto, molho de tomate. Acompanha salada verde e arroz branco.', price: 90.00, image: '/lasanhamolhobranco.webp' },
    { name: 'Macarrão Alho e Oleo', description: 'Massa al dente, alho dourado no azeite, pimenta calabresa, cheiro-verde, salsinha e cebolinha frescas.', price: 85.00, image: '/macarraoalhooleo.webp' },
    { name: 'Macarrão com Molho Bolonhesa', description: 'Massa al dente, molho bolonhesa com almondegas, pimenta calabresa, cheiro-verde, salsinha e cebolinha frescas.', price: 95.00, image: '/macarraobolonhesa.webp' },
    { name: 'Macarrão com Molho Branco', description: 'Massa al dente, molho branco cremoso, pimenta calabresa, cheiro-verde, salsinha e cebolinha frescas.', price: 105.00, image: '/macarraomolhobranco.webp' },
    { name: 'Nhoque', description: 'Massa macia e leve de batata, cozida rapidamente em água fervente e servida com molho de tomate. Acompanha frango grelhado, salada verde e queijo ralado.', price: 75.00, image: '/nhoque.webp' },
    { name: 'Nhoque a Bolonhesa', description: 'Massa macia e leve de batata, cozida rapidamente em água fervente e servida com molho a bolonhesa. Acompanha frango grelhado, salada verde e queijo ralado.', price: 75.00, image: '/nhoquebolonhesa.webp' },
    { name: 'Ravioli', description: 'Consiste em duas finas camadas de massa fresca rechreados com frango, cozidos rapidamente em água fervente e servidos com molho de tomate caseiro. Acompanha queijo ralado, salada verde e arroz branco.', price: 95.00, image: '/ravioli.webp' },
    { name: 'Risoto de Camarão', description: 'Arroz arbóreo cozido lentamente em caldo de camarão, com manteiga, cebola, alho e vinho branco, finalizado com camarões suculentos e um toque de limão siciliano. Acompanha legumes grelhados e salada verde.', price: 165.00, image: '/risotocamarao.webp' },
    { name: 'Talharim com Camarão', description: 'Talharim fresco al dente, alho, manteiga, limão siciliano, um toque de pimenta dedo-de-moça e ervas frescas. Acompanha salada verde refrescante e pão italiano.', price: 170.00, image: '/talharimcamarao.webp' },
  ];

 
  cart: CardapioItem[] = [];
  isModalOpen = false;
  address = '';
  showAddressWarning = false;

  get total(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addToCart(name: string, price: number) {
    const existingItem = this.cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ name, price, quantity: 1 });
    }
  }

  removeItemCart(name: string) {
    const index = this.cart.findIndex(item => item.name === name);
    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  checkout() {
    if (this.cart.length === 0) return;

    if (!this.address.trim()) {
      this.showAddressWarning = true;
      return;
    }

    const cartItems = this.cart.map(item => `${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price}`).join(' | ');
    const phone = '5511996221043';
    const message = encodeURIComponent(cartItems + ` Endereço: ${this.address}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

    this.cart = [];
    this.address = '';
    this.showAddressWarning = false;
  }
}
