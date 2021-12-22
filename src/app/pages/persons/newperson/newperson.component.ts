import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';
import { Person } from '../../../models/person';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../../../services/car.service';
// import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {
  dni="";
  name ="";
    lastname="";
    phone="";
    type="";
    state="";
    car:Array<any>;
    public registrationplate1=""
    public registrationplate2=""
    public registrationplate3=""
    keyword = 'registrationplate';
    public data$:Observable<any[]>;
    placas: any;
    myJsonString:string;
    
  selectEvent1(item) {
     this.registrationplate1=item;
  }
  selectEvent2(item) {
    this.registrationplate2=item;
 }
 selectEvent3(item) {
  this.registrationplate3=item;
}
   

  constructor(
    private carService: CarService,
    // private car: Car,
    private personService: PersonService,
    private toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDataPlate();
  }

  onCreate():void{
    this.placas = 
      {
        "dni": this.dni.toUpperCase(),
        "name": this.name.toUpperCase(),
        "lastname": this.lastname.toUpperCase(),
        "phone":  this.phone,
        "type":this.type.toUpperCase(),
        "state": this.state="ACTIVO",
        "cars":[
          {"registrationplate":this.registrationplate1["registrationplate"]},
          {"registrationplate":this.registrationplate2["registrationplate"]},
           {"registrationplate":this.registrationplate3["registrationplate"]}
    
        ]
    }

      this.personService.addPerson(this.placas).subscribe(
        data=>{
          console.log(data);
          this.toastr.success('Persona Guardada con éxito','OK',{
            timeOut:3000
          });
          this.router.navigate(['/dashboard/persons']);

        },err=>{
          this.toastr.error(err.error.exception,'Error al guardar Persona',{
            timeOut:3000
          });
          
          this.router.navigate(['/dashboard/newperson']);

        }
        
      );
   

  }
  getDataPlate(){
    this.data$=this.carService.lista();
  }

}
