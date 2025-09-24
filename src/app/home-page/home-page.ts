import { Component } from '@angular/core';
import { DropdownInfo } from '../dropdown-info/dropdown-info';
import { CardInfo } from '../card-info/card-info';
import { ScatterChart } from '../scatter-chart/scatter-chart';

@Component({
  selector: 'app-home-page',
  imports: [DropdownInfo, CardInfo, ScatterChart],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})

export class HomePage {
  diabetesType = [
    {title: "Type 1", details: "Autoimmune–often diagnosed in youth; insulin production is minimal or absent."},
    {title: "Type 2", details: "Most common form—related to insulin resistance and lifestyle factors."},
    {title: "Gestational", details: "Occurs during pregnancy; may increase future risk for mother and child."}
  ];

  causes = [
    {title: "Lifestyle", details: "• Unhealthy diet and physical inactivity\n• Overweight and obesity\n• Family history and genetics\n• High blood pressure and abnormal cholesterol\n• Age and certain ethnic backgrounds"},
    {title: "Physiological", details: "•	Insulin resistance\n•	Autoimmune disease\n•	Hormonal imbalance\n•	Pancreatic damage\n•	Genetic mutations"},
  ];

  malaysiaStatistics = [
    { year: 2000, amount_in_thousands: 597 },
    { year: 2011, amount_in_thousands: 2000 },
    { year: 2015, amount_in_thousands: 3500 },
    { year: 2019, amount_in_thousands: 3900 },
    { year: 2023, amount_in_thousands: 3600 },
    { year: 2024, amount_in_thousands: 4800 }
  ]
}
