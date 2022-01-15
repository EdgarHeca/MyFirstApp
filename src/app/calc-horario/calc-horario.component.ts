import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-calc-horario',
  templateUrl: './calc-horario.component.html',
  styleUrls: ['./calc-horario.component.css']
})

export class CalcHorarioComponent {
  list: Array<string> = [];
  listaDif: Array<string> = [];

  tiempoTemp: Array<number> = [];

  horaDiferencia: number = 0;
  horaTemp: Array<string> = [];

  pagoPorDia: Array<number> = [];
  pagoCargo: number = 0;

  newTiempoTemp1!: string;
  newTiempoTemp2!: string;

  //GET RADIO VALUE WITH ANGULAR

  getValue(ent1: string, ent2: string, ent3: string, ent4: string, ent5: string, ent6: string, ent7: string,
    sal1: string, sal2: string, sal3: string, sal4: string, sal5: string, sal6: string, sal7: string, pago1: string, pago2: string,
    radio1: string, radio2: string, radio3: string, radio4: string, radio5: string, radio6: string, radio7: string) {

    this.list = [];
    this.horaTemp = [];
    this.pagoPorDia = [];

    this.list.push(ent1, ent2, ent3, ent4, ent5, ent6, ent7,
      sal1, sal2, sal3, sal4, sal5, sal6, sal7);
    console.warn(this.list);

    for (let i = 0; i < 7; i++) {

      this.tiempoTemp = [];

      let horaEntrada = new Date("01/01/2020 " + this.list[i]).getTime();
      let horaSalida = new Date("01/01/2020 " + this.list[i + 7]).getTime();

      if (horaEntrada > horaSalida) {
        this.horaTemp = ["Error, la hora de entrada es mayor que la hora de salida"];
      }
      else {
        this.horaDiferencia = (horaSalida - horaEntrada) / 60 / 1000;
        console.log(this.horaDiferencia + " minutos");

        this.tiempoTemp = this.timeToHoursMins(this.horaDiferencia);

        if (this.tiempoTemp[0] < 10) {
          this.newTiempoTemp1 = "0" + this.tiempoTemp[0];
        }
        else {
          this.newTiempoTemp1 = this.tiempoTemp[0].toString();
        }

        if (this.tiempoTemp[1] < 10) {
          this.newTiempoTemp2 = "0" + this.tiempoTemp[1];
        }
        else {
          this.newTiempoTemp2 = this.tiempoTemp[1].toString();
        }

        console.log(radio1, radio2, radio3, radio4, radio5, radio6, radio7);
        if(radio1 === 'mesera'){
          this.pagoCargo = parseInt(pago1);
        }
        else if(radio1 === 'cajera'){
          this.pagoCargo = parseInt(pago2);
        }

        if(radio2 === 'mesera'){
          this.pagoCargo = parseInt(pago1);
        }
        else if(radio2 === 'cajera'){
          this.pagoCargo = parseInt(pago2);
        }
        
        if(radio3 === 'mesera'){
          this.pagoCargo = parseInt(pago1);
        }
        else if(radio3 === 'cajera'){
          this.pagoCargo = parseInt(pago2);
        }
        
        if(radio4 === 'mesera'){
          this.pagoCargo = parseInt(pago1);
        }
        else if(radio4 === 'cajera'){
          this.pagoCargo = parseInt(pago2);
        }
        
        if(radio5 === 'mesera'){
          this.pagoCargo = parseInt(pago1);
        }
        else if(radio5 === 'cajera'){
          this.pagoCargo = parseInt(pago2);
        }
        
        if(radio6 === 'mesera'){
          this.pagoCargo = parseInt(pago1);
        }
        else if(radio6 === 'cajera'){
          this.pagoCargo = parseInt(pago2);
        }

        if(radio7 === 'mesera'){
          this.pagoCargo = parseInt(pago1);
        }
        else if(radio7 === 'cajera'){
          this.pagoCargo = parseInt(pago2);
        }

        this.horaTemp.push(this.newTiempoTemp1 + ":" + this.newTiempoTemp2);

        this.pagoPorDia.push(this.timeToMoney(this.horaDiferencia, this.pagoCargo));
        console.log(this.pagoPorDia[i]);
      }
    }
  }

  timeToHoursMins(tiempo: number) {
    let hours = (tiempo / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    return [rhours, rminutes];
  }

  timeToMoney(tiempo: number, pago: number){
    let money = (pago * tiempo) / 60;

    return money;
  }

}