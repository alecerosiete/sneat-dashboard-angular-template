import { Component } from '@angular/core';
import { ExpensesThisWeekComponent } from '../../component/expenses-this-week/expenses-this-week.component';
import { OrderStatisticsComponent } from '../../component/order-statistics/order-statistics.component';
import { ProfileReportComponent } from '../../component/profile-report/profile-report.component';
import { RevenueComponent } from '../../component/revenue/revenue.component';
import { TotalBalanceComponent } from '../../component/total-balance/total-balance.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent,
    RevenueComponent,
    ProfileReportComponent,
    OrderStatisticsComponent,
    TotalBalanceComponent,
    ExpensesThisWeekComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
