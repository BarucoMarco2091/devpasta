import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Product } from '../../core/services/product.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private firestore = inject(Firestore);
  private productsCollection = collection(this.firestore, 'products');

  getProducts() {
    return collectionData(this.productsCollection, { idField: 'id' });
  }

  async addProduct(product: Omit<Product, 'id'>) {
    return await addDoc(this.productsCollection, product);
  }

  async deleteProduct(id: string) {
    const docRef = doc(this.firestore, `products/${id}`);
    await deleteDoc(docRef);
  }
}