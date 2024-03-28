import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { AppError } from '../../../common/app-error';
import { BadInput } from '../../../common/bad-inputs';
import { HttpLearningService } from '../services/http-learning.service';
import { Photo } from './http-learning.interfaces';

@Component({
  selector: 'http-learning',
  templateUrl: './http-learning.component.html',
  styleUrls: ['./http-learning.component.css'],
})
export class HttpLearningComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private service: HttpLearningService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe((photos) => (this.photos = photos));
  }

  createPhoto(input: HTMLInputElement) {
    let newPhoto: Photo = {
      title: input.value,
      id: 0,
      thumbnailUrl: '',
    };
    this.photos.splice(0, 0, newPhoto);

    input.value = '';

    this.service.create(newPhoto).subscribe(
      (newPost) => {
        newPhoto.id = newPost.id;
      },
      (error: AppError) => {
        this.photos.splice(0, 1);

        if (error instanceof BadInput) {
          //this.form.serErrors(error.joriginalError);
        } else throw error;
      }
    );
  }

  updatePhoto(photo: Photo) {
    let updatedPhoto: Photo = {
      title: 'New Title',
      id: photo.id,
      thumbnailUrl: '',
    };

    this.service.update(photo, updatedPhoto).subscribe((updatedPhoto) => {
      const index = this.photos.findIndex((p) => p.id === photo.id);
      if (index !== -1) {
        this.photos[index] = updatedPhoto;
        this.cdr.detectChanges();
      }
    });
  }

  deletePhoto(photo: Photo) {
    const index = this.photos.indexOf(photo);
    this.photos.splice(index, 1);

    this.service.delete(photo).subscribe(null, (error: AppError) => {
      this.photos.splice(index, 0, photo);

      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      } else throw error;
    });
  }
}
