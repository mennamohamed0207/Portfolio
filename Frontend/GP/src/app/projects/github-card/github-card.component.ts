import { Component, inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrl: './github-card.component.css'
})
export class GithubCardComponent implements OnInit {
  @Input() name: String | undefined;
  @Input() description: String | undefined;
  @Input() link: String | undefined;
  @Input() role: String[] | undefined;
  @Input() languages: String[] | undefined;
  @Input() tools: String[] | undefined;
  constructor() {

  }
  public language: String | undefined;
  ngOnInit(): void {
    console.log(this.name);
    console.log(this.languages);
    console.log(this.tools);
  }
  openLink(link: String) {
  }



}
