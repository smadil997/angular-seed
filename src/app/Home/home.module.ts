import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';
import { TerminalModule } from 'primeng/terminal';
import { TreeModule } from 'primeng/tree';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent} from './navigation/navigation.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {CarouselModule} from 'primeng/carousel';
import { ProductService} from './productservice';

@NgModule({
	imports: [
        CarouselModule,
        TabMenuModule,
        BrowserAnimationsModule,
        ButtonModule,
        InputTextModule,
		CommonModule,
		CardModule,
        DockModule,
		TabViewModule,
        MenubarModule,
        DialogModule,
        TerminalModule,
        TreeModule,
        ToastModule,
        GalleriaModule,
	],
    providers: [ProductService],
	declarations: [
		HomepageComponent,NavigationComponent
	]
})
export class HomeModule {}