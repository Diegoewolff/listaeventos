import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemLista } from '../model/ItemLista';

@Injectable({
  providedIn: 'root'
})
export class ItenslistaService {

  constructor(private http: HttpClient) { }

  public adicionarNovoItem(item: ItemLista): Observable<ItemLista>{
    return this.http.post<ItemLista>(environment.urlAPI+"/itemlista", item);
  }
  public removerItem(idItem: number): Observable<string>{
    return this.http.delete<string>(environment.urlAPI+"/itemlista/"+idItem);
  }

  public alterarItem(item: ItemLista): Observable<ItemLista>{
    return this.http.put<ItemLista>(environment.urlAPI+"/itemlista/"+item.numSeq, item);
  }
}
