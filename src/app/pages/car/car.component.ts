import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[]=[];
  filterregistrationplate="";
  
  // qr:string
  // public commonUrl : string = 'http://localhost:8080/person/generateQRCode/100/100/'
  

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cargarCars();
    // this.generarQr();
  }
  cargarCars():void{
    this.carService.lista().subscribe(
      data=>{
        this.cars=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

  // generarQr():void{
  //   this.qr= this.commonUrl 
  // }

}
