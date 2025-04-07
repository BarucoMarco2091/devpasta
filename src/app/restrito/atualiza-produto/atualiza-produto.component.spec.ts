import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestritoAtualizaProdutoComponent } from './atualiza-produto.component';

describe('RestritoAtualizaProdutoComponent', () => {
  let component: RestritoAtualizaProdutoComponent;
  let fixture: ComponentFixture<RestritoAtualizaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestritoAtualizaProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestritoAtualizaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
