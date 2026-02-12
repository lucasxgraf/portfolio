import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'assets/img/skills/frontend/angular.png' },
    { name: 'TypeScript', icon: 'assets/img/skills/frontend/typeScript.png' },
    { name: 'JavaScript', icon: 'assets/img/skills/frontend/javaScript.png' },
    { name: 'HTML', icon: 'assets/img/skills/frontend/html.png' },
    { name: 'CSS', icon: 'assets/img/skills/frontend/css.png' },
    { name: 'Firebase', icon: 'assets/img/skills/tools/firebase.png' },
    { name: 'Git', icon: 'assets/img/skills/tools/git.png' },
    { name: 'REST-API', icon: 'assets/img/skills/tools/rest-api.png' },
    { name: 'Material Design', icon: 'assets/img/skills/frontend/materialDesign.png' },
    { name: 'Scrum', icon: 'assets/img/skills/tools/scrum.png' },
    { name: 'Growth mindset', icon: 'assets/img/skills/tools/growthMindset.png' }
  ];
}
