import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/register';
import { PersonService } from 'src/app/services/person.service';
import { Checkin } from '../../../models/checkin';
import { RegisterService } from '../../../services/register.service';
import { Person } from '../../../models/person';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent implements OnInit {
  dni="";
  registrationplate="";
  observation="";
  observ="";
  obs="";
  placa=""
  user ="Jhonson";
  registers: Register[] = [];
  persons: Person[]=[];
  data: any = {}
  person:Person;
  car:Car;
  constructor( private registerService: RegisterService,
    private personService:PersonService,
    private carService:CarService,
    private toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  search(registrationplate:string){
    console.log(registrationplate);
    this.registerService.searchCarbyDay(registrationplate).subscribe(
      data => {
        this.registers = data;
      },
      err => {
        console.log("registrationplate" + registrationplate);
        console.log(err);
      }
    )
    this.searchbyDni();
  }

  onCreate(){
    var txtobs:any= (document.getElementById("observ") as HTMLInputElement).value;
    if(txtobs == ""){
      this.obs="sin novedad"
    }else{
      this.obs=txtobs
    }
    const checkin = new Checkin(
      this.user="jhonson",
      this.registrationplate=this.data.optcar,
     this.observation=this.obs,
      this.dni=this.dni
      );
  this.registerService.addCheckin(checkin).subscribe(
    data=>{
      this.toastr.success('Checkin Saved','OK',{
        timeOut:3000
      });
      this.router.navigate(['/dashboard/register']);
    },err=>{
      this.toastr.error(err.error.exception,'Fail',{
        timeOut:3000
      });
      this.router.navigate(['/dashboard/newregister']);
    }
  );
 }

 checkOut(){
 var txtobs:any= (document.getElementById("observ") as HTMLInputElement).value;
    if(txtobs == ""){
      this.obs="sin novedad"
    }else{
      this.obs=txtobs
    }
    const checkin = new Checkin(
      this.user="jhonson",
      this.registrationplate=this.data.optcar,
     this.observation=this.obs,
      this.dni=this.dni
      );

this.registerService.addCheckout(checkin).subscribe(
  data=>{
    this.toastr.success('Checkout Saved','OK',{
      timeOut:3000
    });
    this.router.navigate(['/dashboard/register']);
  },err=>{
    this.toastr.error(err.error.exception,'Fail',{
      timeOut:3000
    });
    this.router.navigate(['/dashboard/newregister']);
  }
);
}

searchbyDni(){
  var dni:any= (document.getElementById("dni") as HTMLInputElement).value;
    this.personService.searchByDni(dni).subscribe(
      data=>{
        this.person=data;
      },
      err =>{
        this.toastr.error(err.error.exception,'Se ha producido un error',{
          timeOut:3000
          
        });
        this.router.navigate(['/dashboard/newregister']);
        
       }
    );
}
}
function radioChangeHandler(event: Event, any: any) {
  throw new Error('Function not implemented.');
}
