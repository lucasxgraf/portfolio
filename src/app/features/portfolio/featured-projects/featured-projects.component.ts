import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  technologies: Technology[];
  previewImage: string;
  githubLink: string;
  liveTestLink: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjects {
  hoveredIndex: number | null = null;
  selectedProjectIndex: number | null = null;

  private techMap: Record<string, string> = {
    HTML: 'assets/img/skills/frontend/html.png',
    CSS: 'assets/img/skills/frontend/css.png',
    JavaScript: 'assets/img/skills/frontend/javaScript.png',
    Firebase: 'assets/img/skills/tools/firebase.png',
    RestAPI: 'assets/img/skills/tools/rest-api.png',
  };

  projects: Project[] = [
    {
      name: 'Join',
      technologies: this.buildTech(['HTML', 'CSS', 'JavaScript', 'Firebase']),
      previewImage: 'assets/img/featured-projects/preview-projects/join.png',
      githubLink: 'https://github.com/lucas-graf/join',
      liveTestLink: 'https://lucas-graf.com/join/index.html',
      descriptionKey: 'FEATURED-PROJECTS.PROJECTS.JOIN.DESCRIPTION',
    },
    {
      name: 'Pokedex',
      technologies: this.buildTech(['HTML', 'CSS', 'JavaScript', 'RestAPI']),
      previewImage: 'assets/img/featured-projects/preview-projects/pokedex.png',
      githubLink: 'https://github.com/lucas-graf/pokedex',
      liveTestLink: 'https://lucas-graf.com/pokedex/index.html',
      descriptionKey: 'FEATURED-PROJECTS.PROJECTS.POKEDEX.DESCRIPTION',
    },
    {
      name: 'El Pollo Loco',
      technologies: this.buildTech(['HTML', 'CSS', 'JavaScript']),
      previewImage: 'assets/img/featured-projects/preview-projects/el-pollo-loco.png',
      githubLink: 'https://github.com/lucas-graf/el-pollo-loco',
      liveTestLink: 'https://lucas-graf.com/el-pollo-loco/index.html',
      descriptionKey: 'FEATURED-PROJECTS.PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
    },
  ];

  private buildTech(names: string[]): Technology[] {
    return names.map((name) => ({ name, icon: this.techMap[name] ?? '' }));
  }

  get selectedProject(): Project | null {
    return this.selectedProjectIndex !== null ? this.projects[this.selectedProjectIndex] : null;
  }

  get formattedProjectNumber(): string {
    return this.selectedProjectIndex !== null
      ? String(this.selectedProjectIndex + 1).padStart(2, '0')
      : '';
  }

  openDialog(index: number): void {
    this.selectedProjectIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeDialog(): void {
    this.selectedProjectIndex = null;
    document.body.style.overflow = '';
  }

  nextProject(): void {
    if (this.selectedProjectIndex !== null) {
      this.selectedProjectIndex = (this.selectedProjectIndex + 1) % this.projects.length;
    }
  }

  prevProject(): void {
    if (this.selectedProjectIndex !== null) {
      this.selectedProjectIndex =
        (this.selectedProjectIndex - 1 + this.projects.length) % this.projects.length;
    }
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('dialog_overlay')) {
      this.closeDialog();
    }
  }
}
