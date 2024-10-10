import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { LoadingButtonComponent } from "../../../../../components/loading-button/loading-button.component";
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../../../../../shared.module';
import { PrimeModule } from '../../../../../prime/prime.module';

interface Tarefa{
  id:string;
  nome:string;
}

interface FormModel{
  loja: FormControl<string | null>;
  selectedTarefas: FormControl<Tarefa[] | null>;
}

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [SharedModule, PrimeModule, LoadingButtonComponent],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent implements OnInit {

  public form!:FormGroup;
  tarefas = [{
    id:1,
    nome:"disparo"
  },{
    id:2,
    nome:"vendas"
  }]

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup<FormModel>({
      loja:new FormControl('',[Validators.required]),
      selectedTarefas:new FormControl([],[Validators.required])
    });

    this.form.valueChanges.subscribe(value=>{
      console.log("FORM MUDOU")
      console.log(value)
    })
  }

  public any(){
    console.log("aaaa")
  }

  public submit(){
    console.log("tentou")
    if(this.form.valid){
      console.log('submitado')
    }else{
      alert('form inválida')
      return;
    }
  }


}
