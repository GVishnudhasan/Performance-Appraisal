import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MInterfaceService {
  constructor(private http: HttpClient, private router: Router) {}
  apiConnect(data: any, connUrl: string) {
    return this.http
      .post(
        environment.appurl + connUrl,
        { data: data },
        { headers: this.getHeaders() }
      )
      .pipe(
        tap(
          (res: any) => {
            return res;
          },
          (err: any) => {
            try {
              if (err instanceof HttpErrorResponse) {
                throw new Error(err.message);
              }
              return err.message;
            } catch (e) {
              console.log(e);
            }
          }
        )
      );
  }

  getHeaders() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "",
    });
    return headers;
  }
}
