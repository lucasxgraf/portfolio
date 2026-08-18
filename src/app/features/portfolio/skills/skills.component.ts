import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillGroups = [
    {
      key: 'frontend',
      labelKey: 'SKILLS.GROUPS.FRONTEND',
      skills: [
        { name: 'Angular', icon: 'assets/img/skills/frontend/angular.png' },
        { name: 'TypeScript', icon: 'assets/img/skills/frontend/typeScript.png' },
        { name: 'JavaScript', icon: 'assets/img/skills/frontend/javaScript.png' },
        { name: 'HTML', icon: 'assets/img/skills/frontend/html.png' },
        { name: 'CSS', icon: 'assets/img/skills/frontend/css.png' },
        { name: 'Material Design', icon: 'assets/img/skills/frontend/materialDesign.png' },
      ],
    },
    {
      key: 'backend',
      labelKey: 'SKILLS.GROUPS.BACKEND',
      skills: [
        { name: 'Python', icon: 'assets/img/skills/backend/python.png' },
        { name: 'Django', icon: 'assets/img/skills/backend/django.png' },
        { name: 'Flask', icon: 'assets/img/skills/backend/flask.png' },
        { name: 'PostgreSQL', icon: 'assets/img/skills/backend/postgresql.png' },
        { name: 'SQL', icon: 'assets/img/skills/backend/sql.png' },
        { name: 'Redis', icon: 'assets/img/skills/backend/redis.png' },
        { name: 'Docker', icon: 'assets/img/skills/backend/docker.png' },
        { name: 'Linux', icon: 'assets/img/skills/backend/linux.png' },
        { name: 'Supabase', icon: 'assets/img/skills/backend/supabase.png' },
        { name: 'Firebase', icon: 'assets/img/skills/backend/firebase.png' },
      ],
    },
    {
      key: 'tools',
      labelKey: 'SKILLS.GROUPS.TOOLS',
      skills: [
        { name: 'Git', icon: 'assets/img/skills/tools/git.png' },
        { name: 'REST-API', icon: 'assets/img/skills/tools/rest-api.png' },
        { name: 'CI/CD', icon: 'assets/img/skills/tools/ci_cd.png' },
        { name: 'N8N', icon: 'assets/img/skills/tools/n8n.png' },
        { name: 'Scrum', icon: 'assets/img/skills/tools/scrum.png' },
        { name: 'Growth mindset', icon: 'assets/img/skills/tools/growthMindset.png' },
      ],
    },
  ];
}
