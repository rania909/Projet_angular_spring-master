import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Stock } from 'app/modals/stock';
import { StockserviceService } from 'app/stockservice.service';

@Component({
  selector: 'app-editstock1',
  templateUrl: './editstock1.component.html',
  styleUrls: ['./editstock1.component.css']
})
export class Editstock1Component implements OnInit {

  myForm : FormGroup;
  stocks : Stock[];
  StockEdit : Stock ; 
  @Input() prop2:Stock;
  @Input() stockToEdit:Stock;

  @Output() editStock= new EventEmitter<Stock>();
  constructor(private ac:ActivatedRoute,private es:StockserviceService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idstock:new FormControl({"value": this.stockToEdit.idstock, "disabled" : true} ),
      quantite:new FormControl(this.stockToEdit.quantite),
      quanite_min:new FormControl(this.stockToEdit.quanite_min),
      libellestock:new FormControl(this.stockToEdit.libellestock)
      
    })
  }
  ngOnChanges(changes:SimpleChanges){
    /*this.FormProviderEdit=new FormGroup({
     codeFedit:new FormControl(this.ProviderToEdit.codeF),
     dateCreationedit:new FormControl(this.ProviderToEdit.dateCreation),
     categorieProduitedit:new FormControl(this.ProviderToEdit.categorieProduit)

    })*/
    console.log(changes);
    if(!changes.stockToEdit.firstChange){
    this.myForm.setControl('idstock',new FormControl(this.stockToEdit.idstock) );
    this.myForm.setControl('quantite',new FormControl(this.stockToEdit.quantite));
    this.myForm.setControl('quanite_min',new FormControl(this.stockToEdit.quanite_min)); 
    this.myForm.setControl('libellestock',new FormControl(this.stockToEdit.libellestock)); 
  
  }
  }
  edit(){
    console.log(this.myForm.getRawValue());
    this.es.updateStock(this.myForm.getRawValue()).subscribe();
    this.editStock.emit(this.myForm.getRawValue());
    this.playSound()
    //this.myForm.reset();  
    
    window.location.reload();
  }
  playSound() {
  
    const audio = new Audio();
   audio.src ="../assets/success-sound-effect.mp3"
    audio.load();
    audio.play();
    
  }

}
