import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  defaultTimer = 3000;

  
  constructor() { }

  littleAlertSuccess=(text:string, timer?:number)=>{
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup:'popup-littleAlert p-0 rounded-0 m-0 w-100 bg-success',
        htmlContainer:'m-0'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html:` <div class="row m-0 littleSuccess">
        <div class="col-12 text-center">
            <span class='material-icons-round md-28'>task_alt</span> ${text}
        </div> </div>
           `,
      showConfirmButton: false,
      timer: (timer != null)?timer:this.defaultTimer,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  littleAlertError=(text:string, timer?:number)=>{
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup:'popup-littleAlert p-0 rounded-0 m-0 w-100 bg-danger',
        htmlContainer:'m-0'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html:` <div class="row m-0 littleError">
      <div class="col-12 text-center">
          <span class='material-icons-round md-28'>error_outline</span> ${text}
      </div> </div>
           `,
      showConfirmButton: false,
      timer: (timer != null)?timer:this.defaultTimer,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  littleAlertWarning=(text:string, timer?:number)=>{
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup:'popup-littleAlert p-0 rounded-0 m-0 w-100 bg-warning',
        htmlContainer:'m-0'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html:`<div class="row m-0 littleWarning">
      <div class="col-12 text-center">
          <span class='material-icons-round md-28'>warning_amber</span> ${text}
      </div> </div>
           `,
      showConfirmButton: false,
      timer: (timer != null)?timer:this.defaultTimer,
      allowOutsideClick: false,
      backdrop: false
    });
  }

  littleAlertInfo=(text:string, timer?:number)=>{
    Swal.fire({
      customClass: {
        container: 'p-0 overflow-hidden',
        popup:'popup-littleAlert p-0 rounded-0 m-0 w-100 bg-light',
        htmlContainer:'m-0'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      },
      html:`<div class="row m-0 littleInfo">
      <div class="col-12 text-center">
          <span class='material-icons-round md-28'>info</span> ${text}
      </div> </div>
      `,
      showConfirmButton: false,
      timer: (timer != null)?timer:this.defaultTimer,
      allowOutsideClick: false,
      backdrop: false
    });
  }

}


