import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';

@NgModule({
    imports:[
        MatToolbarModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule 
        
    ],
    exports:[
        MatToolbarModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        
    ]
})

export class SharedModule{

}