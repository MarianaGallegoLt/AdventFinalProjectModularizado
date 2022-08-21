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

  displayedColumns: string[] = ['containerNumber', 'origin', 'destination', 'status', 'description', 'book'];
  dataSource = new MatTableDataSource(this.containerService.llenarTablaContainers());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filterByContainerNumber(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}