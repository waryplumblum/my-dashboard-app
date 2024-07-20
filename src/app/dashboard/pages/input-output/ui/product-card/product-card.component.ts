import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProductCardComponent {

  // Inputs
  public product = input.required<Product>();
  // Outputs
  public onIncrementQuantity = output<number>();
  // Methods
  public incrementQuantity():void{
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

}
