import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';

@Injectable({
    providedIn: 'root'
})
export class CorridaService {

    corridas: Corrida[] = [];

}