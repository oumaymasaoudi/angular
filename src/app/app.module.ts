import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitService } from './services/produit.service';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, CommonModule
  ],
  providers: [
    ProduitService,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
