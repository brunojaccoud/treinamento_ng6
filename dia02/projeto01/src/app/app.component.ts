import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chartType: string = 'bar';

  constructor(){

  }

  public chartDatasets: Array<any> = [
    {
      data: [23,46,69,92,115,138],
      label: 'Valores'
    }
  ];

  public chartLabels: Array<any> = [
    'Telefonia','Banda larga','TV','Fibra otica','Dados Moveis','Telefonia Movel'
  ];

  //DEFININDO CORES PARA AS COLUNAS
  public chartColors: Array<any> = [{
    backgroundColor:[
      '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f'
    ],
    borderColor:[
      '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f'
    ],
    borderWidth: 2
  }];

//DEFININDO QUE O GRAFICO SERÁ RESPONSIVO
public chartOptions: any = {
  responsive: true
}

}
