import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-calc-horario',
  templateUrl: './calc-horario.component.html',
  styleUrls: ['./calc-horario.component.css']
})

export class CalcHorarioComponent {
  errorFlag: boolean = false;
  errorString: string = "";

  list: Array<string> = [];
  listaDif: Array<string> = [];

  tiempoTemp: Array<number> = [];

  horaDiferencia: number = 0;
  horaTemp: Array<string> = [];

  tiempoTotal: string = "00:00";
  tiempoTotalArr: Array<string> = [];
  tiempoDiarioArr: Array<number> = [];
  tiempoTotalTemp: number = 0;

  pagoTotal: string = "$0.00";
  pagoTotalTemp: number = 0;

  pagoPorDia: Array<string> = [];

  newTiempoTemp1!: string;
  newTiempoTemp2!: string;

  cargo1!: string;
  cargo2!: string;
  cargo3!: string;
  cargo4!: string;
  cargo5!: string;
  cargo6!: string;
  cargo7!: string;

  //GET RADIO VALUE

  radioChangeHandlerUno(event: any) {
    this.cargo1 = event.target.value;
  }
  radioChangeHandlerDos(event: any) {
    this.cargo2 = event.target.value;
  }
  radioChangeHandlerTres(event: any) {
    this.cargo3 = event.target.value;
  }
  radioChangeHandlerCuatro(event: any) {
    this.cargo4 = event.target.value;
  }
  radioChangeHandlerCinco(event: any) {
    this.cargo5 = event.target.value;
  }
  radioChangeHandlerSeis(event: any) {
    this.cargo6 = event.target.value;
  }
  radioChangeHandlerSiete(event: any) {
    this.cargo7 = event.target.value;
  }


  getValue(ent1: string, ent2: string, ent3: string, ent4: string, ent5: string, ent6: string, ent7: string,
    sal1: string, sal2: string, sal3: string, sal4: string, sal5: string, sal6: string, sal7: string, pagoM: string, pagoC: string) {

    this.errorString = "";
    this.list = [];
    this.horaTemp = [];
    this.pagoPorDia = [];
    this.tiempoTotal = "";
    this.pagoTotal = "";
    this.pagoTotalTemp = 0;
    this.tiempoTotalTemp = 0;
    this.tiempoDiarioArr = [];

    this.list.push(ent1, ent2, ent3, ent4, ent5, ent6, ent7,
      sal1, sal2, sal3, sal4, sal5, sal6, sal7);


    let pagoMesera = parseFloat(pagoM);
    let pagoCajera = parseFloat(pagoC);


    if ((pagoCajera === null || pagoCajera === undefined || Number.isNaN(pagoCajera)) || (pagoMesera === null || pagoMesera === undefined || Number.isNaN(pagoMesera))) {
      this.errorString = "Error, ingresa solo valores numéricos.";
      this.errorFlag = true;
    }

    for (let i = 0; i < 7; i++) {

      this.tiempoTemp = [];

      let horaEntrada = new Date("01/01/2020 " + this.list[i]).getTime();
      let horaSalida = new Date("01/01/2020 " + this.list[i + 7]).getTime();


      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
      });

      if (horaEntrada > horaSalida) {
        this.errorString = "Error, la hora de entrada es mayor que la hora de salida.";
        this.horaTemp[i] = "X";
        this.errorFlag = true;
      }

      if (this.errorFlag) {

      }
      else {
        this.horaDiferencia = (horaSalida - horaEntrada) / 60 / 1000;
        this.tiempoDiarioArr.push(this.horaDiferencia);
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

        this.horaTemp.push(this.newTiempoTemp1 + ":" + this.newTiempoTemp2);

        //validación tipo de cargo
        //lunes
        if (i === 0 && (this.cargo1 === "mesera" || this.cargo1 === undefined)) {
          console.log(pagoMesera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoMesera)));
        }
        else if (i === 0 && (this.cargo1 === "cajera")) {
          console.log(pagoCajera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoCajera)));
        }//martes
        else if (i === 1 && (this.cargo2 === "mesera" || this.cargo2 === undefined)) {
          console.log(pagoMesera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoMesera)));
        }
        else if (i === 1 && (this.cargo2 === "cajera")) {
          console.log(pagoCajera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoCajera)));
        }//miércoles
        else if (i === 2 && (this.cargo3 === "mesera" || this.cargo3 === undefined)) {
          console.log(pagoMesera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoMesera)));
        }
        else if (i === 2 && (this.cargo3 === "cajera")) {
          console.log(pagoCajera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoCajera)));
        }//jueves
        else if (i === 3 && (this.cargo4 === "mesera" || this.cargo4 === undefined)) {
          console.log(pagoMesera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoMesera)));
        }
        else if (i === 3 && (this.cargo4 === "cajera")) {
          console.log(pagoCajera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoCajera)));
        }//viernes
        else if (i === 4 && (this.cargo5 === "mesera" || this.cargo5 === undefined)) {
          console.log(pagoMesera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoMesera)));
        }
        else if (i === 4 && (this.cargo5 === "cajera")) {
          console.log(pagoCajera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoCajera)));
        }//sábado
        else if (i === 5 && (this.cargo6 === "mesera" || this.cargo6 === undefined)) {
          console.log(pagoMesera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoMesera)));
        }
        else if (i === 5 && (this.cargo6 === "cajera")) {
          console.log(pagoCajera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoCajera)));
        }//domingo
        else if (i === 6 && (this.cargo7 === "mesera" || this.cargo7 === undefined)) {
          console.log(pagoMesera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoMesera)));
        }
        else if (i === 6 && (this.cargo7 === "cajera")) {
          console.log(pagoCajera);
          this.pagoPorDia.push(formatter.format(this.timeToMoney(this.horaDiferencia, pagoCajera)));
        }

        console.log(this.pagoPorDia[i]);

      }
    }
    this.totalTime();

    this.pagaPorSemana();
  }

  timeToHoursMins(tiempo: number) {
    let hours = (tiempo / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    return [rhours, rminutes];
  }

  totalTime() {
    let tHoras = "";
    let tMinutos = "";

    this.tiempoDiarioArr.forEach(element => {
      console.log(element);
      this.tiempoTotalTemp += element;
    });
    console.log(this.tiempoTotalTemp);
    let [horas, minutos] = this.timeToHoursMins(this.tiempoTotalTemp);

    if (horas < 10) {
      tHoras = "0" + horas;
    } else {
      tHoras = horas.toString();
    }
    if (minutos < 10) {
      tMinutos = "0" + minutos;
    } else {
      tMinutos = minutos.toString();
    }

    console.log(horas);
    console.log(minutos);
    this.tiempoTotal = tHoras + ":" + tMinutos;
  }

  pagaPorSemana() {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
    });

    this.pagoPorDia.forEach(element => {
      let pagaDia = element.replace('$', '');
      this.pagoTotalTemp += parseFloat(pagaDia);
    });

    this.pagoTotal = formatter.format(this.pagoTotalTemp);
  }

  timeToMoney(tiempo: number, pago: number) {
    let money = (pago * tiempo) / 60;

    return money;
  }

}