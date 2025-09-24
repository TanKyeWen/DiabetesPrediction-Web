import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

interface ChartData {
  year: number;
  amount_in_thousands: number;
}

@Component({
  selector: 'app-scatter-chart',
  imports: [],
  templateUrl: './scatter-chart.html',
  styleUrl: './scatter-chart.css'
})
export class ScatterChart implements OnInit{
  @Input() countryName: String = '';
  @Input() statistic: any[] = [];

  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  private chart: Chart | undefined;
  
  // Your data
  data: ChartData[] = [
    { year: 2000, amount_in_thousands: 597 },
    { year: 2011, amount_in_thousands: 2000 },
    { year: 2024, amount_in_thousands: 4800 }
  ];

  ngOnInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    
    if (!ctx) {
      console.error('Could not get 2D context from canvas');
      return;
    }

    const chartConfig: ChartConfiguration = {
      type: 'line' as ChartType,
      data: {
        labels: this.data.map(item => item.year.toString()),
        datasets: [{
          label: 'Amount (in thousands)',
          data: this.data.map(item => item.amount_in_thousands),
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // Hide legend since we have a title
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            cornerRadius: 8,
            callbacks: {
              label: (context) => {
                return `Amount: ${context.parsed.y}k`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#6B7280',
              font: {
                size: 12,
                weight: 'normal'
              }
            },
            title: {
              display: true,
              text: 'Year',
              color: '#374151',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(156, 163, 175, 0.2)'
            },
            ticks: {
              color: '#6B7280',
              font: {
                size: 12
              },
              callback: function(value) {
                return value + 'k';
              }
            },
            title: {
              display: true,
              text: 'Amount (thousands)',
              color: '#374151',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeOutQuart'
        }
      }
    };

    this.chart = new Chart(ctx, chartConfig);
  }

  // Helper methods for stats
  getMaxValue(): number {
    return Math.max(...this.data.map(item => item.amount_in_thousands));
  }

  getYearRange(): string {
    const years = this.data.map(item => item.year).sort((a, b) => a - b);
    return `${years[0]} - ${years[years.length - 1]}`;
  }
}
