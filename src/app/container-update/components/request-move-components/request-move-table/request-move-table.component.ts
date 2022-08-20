import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../../../services/container.service';

@Component({
  selector: 'app-request-move-table',
  templateUrl: './request-move-table.component.html',
  styleUrls: ['./request-move-table.component.css']
})
export class RequestMoveTableComponent implements OnInit {

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['issuesBy', 'qty', 'fee', 'total'];
  dataSource = this.containerService.llenarTabla();

}
