import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { MessageComponent } from "./message/message.component";
import { MessageListComponent } from "./message/message-list.component";
import { MessageInputComponent } from "./message/message-input.component";
import { MessagesComponent } from "./message/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from './auth/auth.service';
import { LogoutComponent } from "./auth/logout.component";
import { SignInComponent } from "./auth/signin.component";
import { SignUpComponent } from "./auth/signup.component";
import { AppHeader } from "./message/appheader.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignInComponent,
        SignUpComponent,
        AppHeader
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routing,
      ReactiveFormsModule,
      HttpModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
