import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})

  
export class ProduitsComponent implements OnInit {
  produits : Produit[]; //un tableau de Produit

  
  constructor(private produitService: ProduitService) {
    this.produits=produitService.listeProduits(); 
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  supprimerProduit(p: Produit)
{
//console.log(p); 
let conf = confirm("Etes-vous sûr ?"); 
if (conf)
this.produitService.supprimerProduit(p);

}

}
