import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShortPipe } from "./pipes/short.pipe";
import { MarketComponent } from './components/market/market.component';
import {MatListModule} from '@angular/material/list';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IncomeComponent } from './components/portfolio/income/income.component';
import { AddIncomeComponent } from './components/portfolio/add-income/add-income.component';
import {MatTableModule} from '@angular/material/table';
import { ExpenseComponent } from './components/portfolio/expense/expense.component';
import { AddExpenseComponent } from './components/portfolio/add-expense/add-expense.component';
import { AddLoanComponent } from './components/portfolio/add-loan/add-loan.component';
import { LoanComponent } from './components/portfolio/loan/loan.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsFeedComponent,
    LoaderComponent,
    SignUpComponent,
    MarketComponent,
    SideBarComponent,
    IncomeComponent,
    AddIncomeComponent,
    ExpenseComponent,
    AddExpenseComponent,
    AddLoanComponent,
    LoanComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    ShortPipe
  ]
})
export class AppModule { }
