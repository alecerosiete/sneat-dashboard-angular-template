import { Component, INJECTOR, input, Input, ViewChild } from '@angular/core';
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
  NgApexchartsModule,
  ApexLegend,
  ApexMarkers,
  ApexFill
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
  selector: 'app-total-balance',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule],
  templateUrl: './total-balance.component.html',
  styleUrl: './total-balance.component.css'
})
export class TotalBalanceComponent {

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

  @Input() stroke: ApexStroke =  {
    width: 2,
    curve: 'smooth'
  };

  @Input() legend: ApexLegend = {
    show: false
  };

  @Input() marker:ApexMarkers = {
    size: 6,
    colors: ['transparent'],
    strokeColors: 'transparent',
    strokeWidth: 4,
    discrete: [
      {
        fillColor: this.config.colors.white,
        seriesIndex: 0,
        dataPointIndex: 7,
        strokeColor: this.config.colors.primary,
        //strokeWidth: 2,
        size: 6,
        //radius: 8
      }
    ],
    hover: {
      size: 7
    }
  };

  @Input() colors: String[] = [this.config.colors.primary];

  @Input() fill: ApexFill =  {
    type: 'gradient',
    gradient: {
      shade: this.config.colors.primary,
      shadeIntensity: 0.6,
      opacityFrom: 0.5,
      opacityTo: 0.25,
      //stops: [0, 95, 100]
    }
  };

  @Input() xaxis : ApexXAxis = {
    categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: true,
      style: {
        fontSize: '13px',
        colors: this.config.colors.axisColor
      }
    }
  };

  @Input() yaxis: ApexYAxis = {
    labels: {
      show: false
    },
    min: 10,
    max: 50,
    tickAmount: 4
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [24, 21, 30, 22, 42, 26, 35, 29]
        }
      ],
      chart: {
        height: 215,
        parentHeightOffset: 0,
        //parentWidthOffset: 0,
        toolbar: {
          show: false
        },
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: this.config.colors.borderColor,
        strokeDashArray: 3,
        padding: {
          top: -20,
          bottom: -8,
          left: -10,
          right: 8
        }
      },
    }
  }
}
