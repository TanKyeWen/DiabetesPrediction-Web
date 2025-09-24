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
  ]

  causes = [
    {title: "Lifestyle", details: "• Unhealthy diet and physical inactivity\n• Overweight and obesity\n• Family history and genetics\n• High blood pressure and abnormal cholesterol\n• Age and certain ethnic backgrounds"},
    {title: "Physiological", details: "•	Insulin resistance\n•	Autoimmune disease\n•	Hormonal imbalance\n•	Pancreatic damage\n•	Genetic mutations"},
  ]
}
