import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documento',
  standalone: true
})
export class PipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const digits = value.replace(/\D/g, ''); // Remove todos os não dígitos

    // Formatar como CPF (###.###.###-##)
    if (digits.length === 11) {
      return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    
    // Formatar como CNPJ (##.###.###/####-##)
    if (digits.length === 14) {
      return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    return value; // Retorna o valor original se não for nem CPF nem CNPJ
  }

}
