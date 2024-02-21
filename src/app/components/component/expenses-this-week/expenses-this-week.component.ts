import { Component, input, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexStates, ApexStroke, ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-expenses-this-week',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule],
  templateUrl: './expenses-this-week.component.html',
  styleUrl: './expenses-this-week.component.css'
})

export class ExpensesThisWeekComponent {

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
  @Input() colors: String[] = [this.config.colors.primary]
  @Input() fill: ApexFill = {
    type: 'solid',
    colors: this.colors
  };
  @Input() stroke: ApexStroke = {
    lineCap: 'round'
  };
  @Input() grid: ApexGrid = {
    padding: {
      top: -10,
      bottom: -15,
      left: -10,
      right: -10
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


  
  @Input() label: string[] = [""];

  constructor() {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 60,
        type: "radialBar"
      },      
      labels: [""],
     
    };
    this.plotOptions = {
      radialBar: {
        
        hollow: {
          margin: 2,
          size: '45%'
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: false,
            color: "#888",
            fontSize: "10px",
          },
          value: {
            formatter: function (val) {
              return "$" + parseInt(val.toString(), 10).toString();
            },
            color: '#697a8d',
            fontSize: '13px',
            show: true,
            offsetY: 5,
          },
        },
      }

    };
  }

}
