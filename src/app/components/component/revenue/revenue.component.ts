import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApexDataLabels, ApexGrid, ApexLegend, ApexPlotOptions, ApexResponsive, ApexStates, ApexStroke, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { GrowthComponent } from '../growth/growth.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    GrowthComponent],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})

export class RevenueComponent {
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
  @Input() colors!: string[];
  @Input() dataLabels: ApexDataLabels = {
    enabled: false
  };
  @Input() stroke: ApexStroke = {
    curve: 'smooth',
    width: 3,
    lineCap: 'round',
    colors: [this.config.colors.white],
    
  };
  @Input() legend: ApexLegend = {
    show: true,
    horizontalAlign: 'left',
    position: 'top',
    markers: {
      height: 8,
      width: 8,
      radius: 12,
      offsetX: -3
    },
    labels: {
      colors: this.config.colors.axisColor
    },
    itemMargin: {
      horizontal: 15
    }
  };

  @Input() grid: ApexGrid = {
    borderColor: this.config.colors.borderColor,
    padding: {
      top: 0,
      bottom: -8,
      left: 20,
      right: 20
    }
  };

  @Input() xaxis: ApexXAxis;

  @Input() yaxis: ApexYAxis = {
    labels: {
      style: {
        fontSize: '13px',
        colors: this.config.colors.axisColor
      }
    }
  };

  @Input() responsive!: ApexResponsive[];

  @Input() states!: ApexStates;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: '2021',
          data: [18, 7, 15, 29, 18, 12, 9]
        },
        {
          name: '2020',
          data: [-13, -18, -9, -14, -5, -17, -15]
        }
      ],
      chart: {
        height: 350,
        stacked: true,
        type: 'bar',
        toolbar: { show: false },
        
      },
    };

    this.plotOptions = {
      bar: {
        horizontal: false,
        //barHeight: '50',
        columnWidth: '33%',
        borderRadius: 12,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all',
        //startingShape: 'rounded',
        //endingShape: 'rounded'
      }
    };

    this.colors = [this.config.colors.primary, this.config.colors.info];

    this.xaxis = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          fontSize: '13px',
          colors: this.config.colors.axisColor
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    };

    this.responsive = [
      {
        breakpoint: 1700,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '32%'
            }
          }
        }
      },
      {
        breakpoint: 1580,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: 1440,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '42%'
            }
          }
        }
      },
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '48%'
            }
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '40%'
            }
          }
        }
      },
      {
        breakpoint: 1040,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 11,
              columnWidth: '48%'
            }
          }
        }
      },
      {
        breakpoint: 991,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '30%'
            }
          }
        }
      },
      {
        breakpoint: 840,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '35%'
            }
          }
        }
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '28%'
            }
          }
        }
      },
      {
        breakpoint: 640,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '32%'
            }
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '37%'
            }
          }
        }
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: 420,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '52%'
            }
          }
        }
      },
      {
        breakpoint: 380,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '60%'
            }
          }
        }
      }
    ];

    this.states = {
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
    }
  }
}
