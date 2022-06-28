import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MyService {
    sayMyname() {
        console.log('Tutor Andrews')
    }
}