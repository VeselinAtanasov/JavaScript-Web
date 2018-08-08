import { NgModule } from '@angular/core'
import { authComponents } from './index';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [
        ...authComponents
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        AuthService,

    ],
    bootstrap: [
        
    ],
    exports:[

    ]
})

export class AuthModule { }