import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
import { Stock, StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel:FormGroup;
  
  stock:Stock;

  categories = ['IT','Chat','ECommerce'];
  
  constructor(private routerInfo:ActivatedRoute ,private stockService:StockService, private router:Router) { }

  ngOnInit() {
    this.stock = this.stockService.getStock(this.routerInfo.snapshot.params['id']);
    console.log(this.stock.name);
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name:[this.stock.name,[Validators.required,Validators.minLength(3)]],
      price:[this.stock.price,Validators.required],
      desc:[this.stock.desc],
      categories:fb.array([
        new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
        new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
        new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
      ],this.categoriesSelectValidator)
    });
  }

  categoriesSelectValidator(control:FormArray){
    var valid = false;
    control.controls.forEach(control=>{
      if(control.value)
        {
          valid = true;
        }
    });
    if(valid){
      return null;
    }
    else{
      return {categoriesLength:true};
    }
  }

  cancel(){
    this.router.navigateByUrl('/stocks');
  }
  save(){
    var saveCategories = [];
    var index = 0;
    for(var i=0; i<3;i++)
      {
        if(this.formModel.value.categories[i])
          {
            saveCategories[index++] = this.categories[i];
          }
      }
    this.formModel.value.categories = saveCategories;
    this.formModel.value.rating = this. stock.rating;
    console.log(this.formModel.value);
    //this.router.navigateByUrl('/stocks');
  }
}
