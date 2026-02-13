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
      name: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      previewImage: 'assets/img/featured-projects/preview-projects/join.png',
      githubLink: 'https://github.com/lucas-graf/join',
      liveTestLink: 'https://lucas-graf.com/join/index.html',
    },
    {
      name: 'Pokedex',
      technologies: ['HTML', 'CSS', 'JavaScript', 'RestAPI'],
      previewImage: 'assets/img/featured-projects/preview-projects/pokedex.png',
      githubLink: 'https://github.com/lucas-graf/pokedex',
      liveTestLink: 'https://lucas-graf.com/pokedex/index.html',
    },
    {
      name: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      previewImage: 'assets/img/featured-projects/preview-projects/el-pollo-loco.png',
      githubLink: 'https://github.com/lucas-graf/el-pollo-loco',
      liveTestLink: 'https://lucas-graf.com/el-pollo-loco/index.html',
    },
  ];
}
