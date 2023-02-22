import { CommonModule } from '@angular/common';
import { 
  Component, 
  OnInit, OnChanges, 
  Input, SimpleChanges, 
  DoCheck, AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit , 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  @Input('servElement') element:{type:string,name:string,content:string}
  @Input() name: string;
  @ViewChild('heading',{static:true}) header:ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph:ElementRef;


  constructor() { 
    console.log('constructor is called');
  }

  ngOnInit(): void {
    console.log('ngonit is called');
    console.log('textContent: '+this.header.nativeElement.textContent);
    console.log('paragraphContent: '+this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges is called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDocheck is called');
  }

  ngAfterContentInit(): void {
    console.log('ngafftercontent in it is called');
    console.log('textContent: '+this.header.nativeElement.textContent);
    console.log('paragraphContent: '+this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngaftercontentchecked is called')
  }
  ngAfterViewInit(): void {
    console.log('ngaffterview in it is called');
    console.log('textContent: '+this.header.nativeElement.textContent);
    console.log('paragraphContent: '+this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngafterviewchecked is called')
  }
  ngOnDestroy(): void {
    console.log('ngondestroy is called');
  }
}
