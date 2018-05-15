import { Component } from '@angular/core';
import { InfoNavBarService } from '../../shared/info-navbar.service';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-dividendos',
  templateUrl: './dividendos.component.html',
  styleUrls: ['./dividendos.component.css'],
  providers: [ InfoNavBarService ]

})
export class DividendosComponent {

  // Servicio que alimenta los selectores
  listaEmpresas = [];
  listaSectores = [];
  listaInformes = [];
  // Ag grid
  gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];
  domLayout;
  isCollapsed2 = true;

  compania: string;

  constructor(servicio: InfoNavBarService) {
    this.listaEmpresas = servicio.getEmpresas();
    this.listaSectores = servicio.getSectores();
    this.listaInformes = servicio.getInformes();

    this.gridOptions = <GridOptions>{};

    this.columnDefs = [
      { headerName: 'Empresa', field: 'Empresa',  pinned: 'left', minWidth: 200, maxWidth: 400,
        cellStyle: { 'font-weight': '600', 'justify-content': 'left' } },
      { headerName: 'F.Abono', field: 'FAbono', minWidth: 65 },
      { headerName: 'Nombre', field: 'Nombre', minWidth: 120,  cellStyle: { 'text-align': 'center', 'font-size': '14px' } },
      { headerName: 'Ejercicio', field: 'Ejercicio', minWidth: 60 },
      { headerName: 'Clase', field: 'Clase', minWidth: 70 },
      { headerName: 'Concepto', field: 'Concepto', minWidth: 75 },
      { headerName: 'Importe Bruto', field: 'ImporteB', minWidth: 80 },
      { headerName: 'Importe Neto', field: 'ImporteN', minWidth: 70 }
    ];

    this.rowData = [
      {
        Empresa: 'Nombre de empresa grande a 2 lineas',
        FAbono: 999.999,
        Nombre: 'ABERTIS A',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'ACCIONA',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'ACERINOX',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'ACS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AENA',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AIRBUS GROUP',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'ALANTRA PART',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'ALMIRALL',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'AMADEUS',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      },
      {
        Empresa: 'Nombre de Empresa',
        FAbono: 999999,
        Nombre: 'APERAM',
        Ejercicio: 2017,
        Clase: 'Ordinario',
        Concepto: 'A Cuenta',
        ImporteB: 999.999,
        ImporteN: 999.999
      }
    ];
    this.domLayout = 'autoHeight';
    this.gridOptions.rowHeight = 40;
  }

  onGridSizeChanged(params) {
    const gridWidth = document.getElementById('grid-wrapper').offsetWidth;
    const columnsToShow = [];
    const columnsToHide = [];
    let totalColsWidth = 0;
    const allColumns = params.columnApi.getAllColumns();
    for (let i = 0; i < allColumns.length; i++) {
      const column = allColumns[i];
      totalColsWidth += column.getMinWidth();
    }
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  companiaSeleccionada(item) {
    this.compania = item;
  }

}
