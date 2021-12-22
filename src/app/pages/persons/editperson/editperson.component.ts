import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-editperson',
  templateUrl: './editperson.component.html',
  styleUrls: ['./editperson.component.css']
})
export class EditpersonComponent implements OnInit {
  person: Person=null;
  dni="";
  name ="";
    lastname="";
    phone="";
    type="";
    state="";
    placas: any;
  public registrationplate1=""
    public registrationplate2=""
    public registrationplate3=""
    keyword = 'registrationplate';
    public data$:Observable<any[]>;
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
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(){
    this.getDataPlate();
    const id= this.activatedRoute.snapshot.params.id;
    this.personService.searchByDni(id).subscribe(
      data=>{
        this.person=data;
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        this.router.navigate(['/dashboard/edit']);
        
      }
    );
  }

  onUpdate(){
    this.placas = 
    {
      "dni": this.person.dni,
      "name": this.person.name,
      "lastname": this.person.lastname,
      "phone":  this.person.phone,
      "type":this.person.type,
      "state": this.person.state,
      "cars":[
        {"registrationplate":this.registrationplate1["registrationplate"]},
        {"registrationplate":this.registrationplate2["registrationplate"]},
         {"registrationplate":this.registrationplate3["registrationplate"]}
  
      ]
  }
  console.log(this.placas)
    this.personService.updatePerson(this.placas).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('Persona Actualizada','OK',{
          timeOut:3000
        });
        this.router.navigate(['/dashboard/persons']);

      },err=>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        

      }
      
    );
 
  };

  getDataPlate(){
    this.data$=this.carService.lista();
  }

}
