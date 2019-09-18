import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-al',
  template: `
  <div class="alert alert-info mt-3">
  Angular, Typescript, JavaScript is the future of front end development in any application. If you have not learned Angular and wanted to learn then CodeKul will be your first priority. CodeKul is a training institute which provides training on Angular 2 in Pune. If you decided to learn Angular then enroll your name at CodeKul for Angular certification. 
  </div>
  
  `,
  styles: []
})
export class MyAlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
