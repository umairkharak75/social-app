import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPost:Subject<any>

   socket = io('http://localhost:5000');

addPost(data){
  this.socket.emit('input',data)

}


getAddedPost():Observable<any>{
  let observable= new Observable<{name:string}>(observer=>{
    this.socket.on('output',(data)=>{
  
      observer.next(data)
    })
  })  
return observable
}
}
