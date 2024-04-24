import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

 appointments: Appointment[] = [] 

 ngOnInit(): void {
  //throw new Error('Method not implemented.');
  //console.log("get loaded")

  let savedAppoiments = localStorage.getItem("appointments")
  this.appointments = savedAppoiments ? JSON.parse(savedAppoiments) : []
}


 addAppointment(){
  if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
    let newAppointment : Appointment ={
      id: Date.now(),
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    }
    this.appointments.push(newAppointment)

    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();

    //alert (this.appointments.length);

    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
  
 }

 deleteAppointment(index: number){
  this.appointments.splice(index, 1)
  localStorage.setItem("appointments", JSON.stringify(this.appointments))
 }

}
