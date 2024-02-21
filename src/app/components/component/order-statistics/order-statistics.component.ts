import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexDataLabels, ApexGrid, ApexLegend, ApexPlotOptions, ApexStroke, ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-order-statistics',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule],
  templateUrl: './order-statistics.component.html',
  styleUrl: './order-statistics.component.css'
})
export class OrderStatisticsComponent {

  public config = {
    colors: {
      primary: '#696cff',
      secondary: '#8592a3',
      success: '#71dd37',
      info: '#03c3ec',
      warning: '#ffab00',
      danger: '#ff3e1d',
      dark: '#233446',
      black: '#000',
      white: '#fff',
      body: '#f4f5fb',
      headingColor: '#566a7f',
      axisColor: '#a1acb8',
      borderColor: '#eceef1'
    }
  };

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  @Input() plotOptions!: ApexPlotOptions;
  @Input() labels: string[] = ['Electronic', 'Sports', 'Decor', 'Fashion'];
  @Input() colors: string[] = [this.config.colors.primary, this.config.colors.secondary, this.config.colors.info, this.config.colors.success];
  @Input() stroke: ApexStroke = {
    width: 5,
    colors: [this.config.colors.white]
  };
  @Input() dataLabels: ApexDataLabels = {
    enabled: false,
    formatter: function (val: any, opt) {
      return parseInt(val) + '%';
    }
  };
  @Input() legend: ApexLegend = {
    show: false
  };
  @Input() grid: ApexGrid = {
    padding: {
      top: 0,
      bottom: 0,
      right: 15
    }
  };

  constructor() {
    this.chartOptions = {
      series: [85, 15, 50, 50],
      chart: {
        height: 165,
        width: 130,
        type: 'donut'
      },
    }

    this.plotOptions = {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            value: {
              fontSize: '1.5rem',
              fontFamily: 'Public Sans',
              color: this.config.colors.headingColor,
              offsetY: -15,
              formatter: function (val) {
                return parseInt(val) + '%';
              }
            },
            name: {
              offsetY: 20,
              fontFamily: 'Public Sans'
            },
            total: {
              show: true,
              fontSize: '0.8125rem',
              color: this.config.colors.axisColor,
              label: 'Weekly',
              formatter: function (w) {
                return '38%';
              }
            }
          }
        }
      }
    }

  }

}
