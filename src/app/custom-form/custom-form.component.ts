import {
  Component, OnInit, Input, AfterViewInit, AfterContentInit, OnDestroy, ElementRef,
  NgZone, PLATFORM_ID, Inject, ViewChild, ContentChildren, QueryList
} from '@angular/core';
import {
  DxComponentExtension, DxTemplateHost, WatcherHelper, DxFormComponent,
  INestedOptionContainer,
  NestedOptionHost
} from 'devextreme-angular';
import { TransferState } from '@angular/platform-browser';
import { DxiItemComponent } from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
  providers: [NestedOptionHost]
})
export class CustomFormComponent extends DxComponentExtension implements OnInit, INestedOptionContainer, AfterViewInit,
  AfterContentInit, OnDestroy {

  @ViewChild('form', { static: true }) form: DxFormComponent;
  @ContentChildren(DxiItemComponent) itemsChildren: QueryList<DxiItemComponent>;
  items: any = [];

  constructor(element: ElementRef, ngZone: NgZone, templateHost: DxTemplateHost, watcherHelper: WatcherHelper,
              transferState: TransferState, @Inject(PLATFORM_ID) platformId: any,
              private optionHost: NestedOptionHost) {
    super(element, ngZone, templateHost, watcherHelper, transferState, platformId);
    optionHost.setHost(this);
  }

  @Input() formData: any;

  protected _createInstance(element: any, options: any) {
    return this.form.instance;
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.itemsChildren.forEach(z => {
      this.items.push(z);
    });
  }

  ngAfterContentInit(): void {
  }


}
