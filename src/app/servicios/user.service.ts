import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from './../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiKey = "AIzaSyBG_Ne7MIuOSJQQPgyuhGhnh5cWpblA3A0";
  private databaseUrl = "https://descubre-veracruz-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]> {
    const url = `${this.databaseUrl}/usuarios.json?apiKey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (!response) {
          return [];
        }
        // Convertir el objeto de usuarios en un array de usuarios
        return Object.keys(response).map(key => ({
          id: key,
          ...response[key]
        }));
      })
    );
  }

  // Método para actualizar un usuario
  deleteUser(uid: string): Observable<void> {
    const url = `${this.databaseUrl}/usuarios/${uid}.json?apiKey=${this.apiKey}`;
    return this.http.delete<void>(url);
  }

  // Método para actualizar un usuario
  updateUser(usuario: Usuario): Observable<void> {
    const url = `${this.databaseUrl}/usuarios/${usuario.uid}.json?apiKey=${this.apiKey}`;
    return this.http.put<void>(url, usuario);
  }
}
