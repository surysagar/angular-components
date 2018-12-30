import { Component,ViewChild, ViewChildren, ViewRef,ViewContainerRef,TemplateRef,ContentChildren,QueryList,ElementRef,Renderer2,OnInit,ComponentFactoryResolver,EmbeddedViewRef } from '@angular/core';
import{HelloComponent} from '../../../common/components/hello.component';

@Component({
  selector: 'access-child-component',
  templateUrl: './access-child.component.html',
  styleUrls: [ './access-child.component.css' ]
})
export class AccessChildComponent implements OnInit {
  divId:number=0;

  @ViewChild("showTmplButton")
  showTmplButton:ElementRef;
  @ViewChild("thumbnailTemplate", {read:TemplateRef})
  tmpl:TemplateRef<any>;
  buttonTitle:string="Show Template";
  @ViewChild("vc",{read:ViewContainerRef})
  vc:ViewContainerRef;
  id:number=0;

  constructor(private renderer:Renderer2, hostElementRef:ElementRef, private componentFactory:ComponentFactoryResolver){


  }

  ngOnInit(){

  }

  deleteView(option){
    //what to do here.
    let index = this.vc.indexOf(option.viewRef);
    console.log("removing index "+index);
    this.vc.remove(index);
  }

  showTemplate(){

    let viewRef:EmbeddedViewRef<any> = this.vc.createEmbeddedView(this.tmpl, {option:{description: 'description '+(this.id++)}})
    let index = this.vc.indexOf(viewRef);
    console.log("index is "+index);
    viewRef.context.option.viewRef = viewRef;

  }
  printViewInfo(){
    //I want to get all the views which are currently in the container and print their context objects.
    let length = this.vc.length
    for(let i=0;i<length;i++){
      let view = <EmbeddedViewRef<any>> this.vc.get(i);
      //how to get the context back here from view??
      console.log("view.context.option ",view.context.option.description);
    }
  }

}
