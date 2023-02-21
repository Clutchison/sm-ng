import { Component, OnInit } from '@angular/core';
import { ReferenceService } from './services/ref.service';

@Component({
  selector: 'sm-stat-form',
  templateUrl: './stat-form.component.html',
  styleUrls: ['./stat-form.component.css']
})
export class StatFormComponent implements OnInit {

  crs: string[] = [];
  sizes: string[] = [];
  alignments: string[] = [];
  hpUsesDice: boolean = true;

  constructor(private refService: ReferenceService) { }

  ngOnInit(): void {
    this.refService.getCRs().then(crs => this.crs = crs);
    this.refService.getSizes().then(sizes => this.sizes = sizes);
    this.refService.getAlignments().then(als => this.alignments = als);
  }

}
