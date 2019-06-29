import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ExamComponent } from 'src/exam/exam.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    ExamComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MainRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class MainModule { }
