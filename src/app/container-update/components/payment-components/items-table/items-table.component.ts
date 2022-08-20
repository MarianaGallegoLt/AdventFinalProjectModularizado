import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../../../services/container.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['issuesBy', 'qty', 'fee', 'total', 'delete'];
  dataSource = this.containerService.llenarTabla();

}
