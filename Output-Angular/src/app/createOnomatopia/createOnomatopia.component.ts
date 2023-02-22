import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './createOnomatopia.component.html',
  styleUrls: ['./createOnomatopia.component.css']
})
export class CreateOnomatopiaComponent {
    newOnomatopia: string ="";
    @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
    onomatopeNameSave:string="";

    createOnomatopia(){
        this.sendOnomatopiaToParent.emit(this.onomatopeNameSave);
        this.onomatopeNameSave = "";
    }
}

