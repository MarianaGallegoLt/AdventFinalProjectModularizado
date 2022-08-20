import { Injectable } from '@angular/core';
import { item } from '../interfaces/interfaces.interface';

const ELEMENT_DATA = [
    {issuesBy: 1, qty: 'Hydrogen', fee: 1.0079, total: 'H'},
    {issuesBy: 2, qty: 'Helium', fee: 4.0026, total: 'He'},
    {issuesBy: 3, qty: 'Lithium', fee: 6.941, total: 'Li'},
    {issuesBy: 4, qty: 'Beryllium', fee: 9.0122, total: 'Be'},
    {issuesBy: 5, qty: 'Boron', fee: 10.811, total: 'B'}
  ];

  const CONTAINERS_LIST = [
    {containerNumber: 1, origin: 'Hydrogen', destination: 1.0079, status: 'H', description: 'its a cute container'},
    {containerNumber: 2, origin: 'Helium', destination: 4.0026, status: 'He', description: 'its a cute container'},
    {containerNumber: 3, origin: 'Lithium', destination: 6.941, status: 'Li', description: 'its a cute container'},
    {containerNumber: 4, origin: 'Beryllium', destination: 9.0122, status: 'Be', description: 'its a cute container'},
    {containerNumber: 5, origin: 'Boron', destination: 10.811, status: 'B', description: 'its a cute container'},
    {containerNumber: 6, origin: 'Carbon', destination: 12.0107, status: 'C', description: 'its a cute container'},
    {containerNumber: 7, origin: 'Nitrogen', destination: 14.0067, status: 'N', description: 'its a cute container'},
    {containerNumber: 8, origin: 'Oxygen', destination: 15.9994, status: 'O', description: 'its a cute container'},
    {containerNumber: 9, origin: 'Fluorine', destination: 18.9984, status: 'F', description: 'its a cute container'},
    {containerNumber: 10, origin: 'Neon', destination: 20.1797, status: 'Ne', description: 'its a cute container'},
    {containerNumber: 11, origin: 'Sodium', destination: 22.9897, status: 'Na', description: 'its a cute container'},
    {containerNumber: 12, origin: 'Magnesium', destination: 24.305, status: 'Mg', description: 'its a cute container'},
    {containerNumber: 13, origin: 'Aluminum', destination: 26.9815, status: 'Al', description: 'its a cute container'},
    {containerNumber: 14, origin: 'Silicon', destination: 28.0855, status: 'Si', description: 'its a cute container'},
    {containerNumber: 15, origin: 'Phosphorus', destination: 30.9738, status: 'P', description: 'its a cute container'},
    {containerNumber: 16, origin: 'Sulfur', destination: 32.065, status: 'S', description: 'its a cute container'},
    {containerNumber: 17, origin: 'Chlorine', destination: 35.453, status: 'Cl', description: 'its a cute container'},
    {containerNumber: 18, origin: 'Argon', destination: 39.948, status: 'Ar', description: 'its a cute container'},
    {containerNumber: 19, origin: 'Potassium', destination: 39.0983, status: 'K', description: 'its a cute container'},
    {containerNumber: 20, origin: 'Calcium', destination: 40.078, status: 'Ca', description: 'its a cute container'},
  ];

@Injectable({
  providedIn: 'root',
})
export class ContainerService {

  constructor() {}

  llenarTabla(): any[] {
    let dataSource = ELEMENT_DATA;

    return dataSource;
  }

  llenarTablaContainers(): any[] {
    let containersList = CONTAINERS_LIST;

    return containersList;
  }

}
