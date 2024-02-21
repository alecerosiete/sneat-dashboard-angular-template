import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-profile-report',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule],
  templateUrl: './profile-report.component.html',
  styleUrl: './profile-report.component.css'
})
export class ProfileReportComponent {

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

  @Input() colors: string[] = [this.config.colors.warning];

  @Input() xaxis: ApexXAxis = {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    }
  };

  @Input() yaxis: ApexYAxis | ApexYAxis[] = {
    show: false
  };

  @Input() stroke: ApexStroke =  {
    width: 5,
    curve: 'smooth'
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [110, 270, 145, 245, 205, 285]
        }
      ],
      chart: {
        height: 80,
        width: 175,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: this.config.colors.warning,
          opacity: 0.15
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },     
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        show: false,
        padding: {
          right: 8
        }
      },

    };

  }
}