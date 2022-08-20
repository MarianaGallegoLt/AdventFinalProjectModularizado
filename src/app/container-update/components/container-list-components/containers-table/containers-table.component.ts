import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ContainerService } from '../../../services/container.service';

@Component({
  selector: 'app-containers-table',
  templateUrl: './containers-table.component.html',
  styleUrls: ['./containers-table.component.css']
})

export class ContainersTableComponent implements AfterViewInit  {

  constructor(private containerService: ContainerService) { }

  //Para que funcione la tabla hice cambios en tsconfig.json

  displayedColumns: string[] = ['containerNumber', 'origin', 'destination', 'status', 'description', 'book'];
  dataSource = new MatTableDataSource(this.containerService.llenarTablaContainers());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}