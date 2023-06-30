
import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  value1: number | null | any = null;
  value2: number | null | any = null;
  chartData: number[] = [];
  chartLabels: string[] = [];
  errorMessage: string | null = null;

  createChart() {
    this.chartData = [this.value1, this.value2];
    this.chartLabels = ['Value 1', 'Value 2'];

    // Create the pie chart
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Chart Data',
          data: this.chartData,
          borderWidth: 5,
          borderColor: 'grey',
          backgroundColor: ['pink', 'yellow']
        }]
      },
      options: {}
    });
  }

  updateValues() {
    if (this.value1 !== null && this.value2 === null) {
      this.value2 = 100 - this.value1;
    } else if (this.value1 === null && this.value2 !== null) {
      this.value1 = 100 - this.value2;
    }
  }

  validateValues() {
    if (this.value1 !== null && this.value2 !== null && this.value1 + this.value2 > 100) {
      this.errorMessage = 'The sum of values should not exceed 100.';
    } else {
      this.errorMessage = null;
    }
  }
}
