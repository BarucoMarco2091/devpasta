import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    imageUrl: ['', Validators.required]
  });

  productId?: string;
  isEditMode = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = params['id'];
        this.loadProduct(this.productId);
      }
    });
  }

  async onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      
      if (this.isEditMode && this.productId) {
        await this.productService.updateProduct(this.productId, productData);
      } else {
        await this.productService.addProduct(productData as any);
      }
      
      this.router.navigate(['/admin/products']);
    }
  }

  private async loadProduct(id: string) {
    // Implemente conforme necessário
  }
}