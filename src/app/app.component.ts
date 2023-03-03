import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  
  constructor(private db:AngularFireDatabase) {
    //MODIFICAR VALORES DEVARIABLE CON SU VALOR 
    this.db.object("contactos").set(true);

   
    this.db.list("contactos").push({nombre: "EJEMPLO", apellido:"EJE", edad:19, numero:"number"})

    //DETECTAR CAMBIOS DE VARIABLE 
    //       this.db.object("alarma").valueChanges().subscribe(data=>{
    //       console.log(data);  
    // })
  }
          
  // registrarContacto(){
  //   this.db.list("contactos").push({nombre: "EJEMPLO", apellido:"EJE", edad:19, numero:"number"})
  // }

  // actualizarBoton(){

  // }

}
