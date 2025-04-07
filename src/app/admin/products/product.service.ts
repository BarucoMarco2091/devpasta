import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Product } from '../products/product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private firestore = inject(Firestore);
  private productsCollection = collection(this.firestore, 'products');

  getProducts(): Observable<Product[]> {
    return collectionData(this.productsCollection, { idField: 'id' }) as Observable<Product[]>;
  }

  async addProduct(product: Omit<Product, 'id'>): Promise<string> {
    const docRef = await addDoc(this.productsCollection, product);
    return docRef.id;
  }

  async updateProduct(id: string, product: Partial<Product>): Promise<void> {
    const docRef = doc(this.firestore, `products/${id}`);
    await updateDoc(docRef, product);
  }

  async deleteProduct(id: string): Promise<void> {
    const docRef = doc(this.firestore, `products/${id}`);
    await deleteDoc(docRef);
  }
}