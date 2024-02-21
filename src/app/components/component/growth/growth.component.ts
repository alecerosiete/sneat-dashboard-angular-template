import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStates,
  ApexStroke,
  NgApexchartsModule
} from 'ng-apexcharts';
import {
  ChartComponent,
  ApexChart,
  ApexXAxis,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};


@Component({
  selector: 'app-growth',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule],
  templateUrl: './growth.component.html',
  styleUrl: './growth.component.css'
})
export class GrowthComponent {
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
  @Input() labels: string[] = ['Growth'];
  @Input() plotOptions!: ApexPlotOptions;
  @Input() colors: string[] = [this.config.colors.primary];
  @Input() fill: ApexFill = {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.5,
      gradientToColors: [this.config.colors.primary],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 0.6,
      //stops: [30, 70, 100]
    }
  };
  @Input() stroke: ApexStroke = {
    dashArray: 5
  };

  @Input() dataLabels: ApexDataLabels = {
    enabled: false
  };

  @Input() grid: ApexGrid = {
    padding: {
      top: -35,
      bottom: -10
    }
  };
  @Input() states: ApexStates = {
    hover: {
      filter: {
        type: 'none'
      }
    },
    active: {
      filter: {
        type: 'none'
      }
    }
  };


  constructor() {

    this.chartOptions = {
      series: [76],
      chart: {
        height: 240,
        type: 'radialBar'
      },
    };

    this.plotOptions = {
      radialBar: {
        //size: 150,
        offsetY: 10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '55%'
        },
        track: {
          background: this.config.colors.white,
          strokeWidth: '100%'
        },
        dataLabels: {
          name: {
            offsetY: 15,
            color: this.config.colors.headingColor,
            fontSize: '15px',
            fontWeight: '600',
            fontFamily: 'Public Sans'
          },
          value: {
            offsetY: -25,
            color: this.config.colors.headingColor,
            fontSize: '22px',
            fontWeight: '500',
            fontFamily: 'Public Sans'
          }
        }
      }
    };

  }

}

