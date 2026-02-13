import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface Project {
  name: string;
  technologies: string[];
  previewImage: string;
  githubLink: string;
  liveTestLink: string;
}

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjects {
  hoveredIndex: number | null = null;
  
  projects: Project[] = [
    {
      name: 'Pokedex',
      technologies: ['JavaScript', 'RestAPI', 'HTML', 'CSS'],
      previewImage: 'Comming soon',
      githubLink: 'Comming soon',
      liveTestLink: 'Comming soon',
    },
    {
      name: 'Join',
      technologies: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      previewImage: 'Comming soon',
      githubLink: 'Comming soon',
      liveTestLink: 'Comming soon',
    },
    {
      name: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      previewImage: 'Comming soon',
      githubLink: 'Comming soon',
      liveTestLink: 'Comming soon',
    },
  ];
}
