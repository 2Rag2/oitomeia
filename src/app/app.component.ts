import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Usuario', url: 'user', icon: 'person'},
    {title:'Lista de Usuario',url:'list-users', icon:'people'},
    {title:'tarefas', url:'tarefas', icon:'bookmark'},
    {title:'Buscar Cep',url:'cep',icon:'map'}
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
