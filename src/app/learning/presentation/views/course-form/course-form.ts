import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LearningStore} from '../../../application/learning.store';
import {Course} from '../../../domain/model/couse.entity';
import {Category} from '../../../domain/model/category.entity';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-course-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInput
  ],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})
export class CourseForm {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(LearningStore);

  form = this.fb.group({
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    categoryId: new FormControl<number | null>(null)
  });
  categories = this.store.categories;
  isEdit = false;
  courseId: number | null = null;

  constructor() {
    this.route.params.subscribe(params => {
      this.courseId = params['id'] ? +params['id'] : null;
      this.isEdit = !!this.courseId;
      if (this.isEdit) {
        const course = this.store.courses().find(c => c.id === this.courseId);
        if (course) {
          this.form.patchValue({
            title: course.title,
            description: course.description,
            categoryId: course.categoryId
          });
        }
      }
    });
  }

  submit() {
    if (this.form.invalid) return;
    const category: Category | null = this.store.getCategoryById(this.form.value.categoryId)() ?? null;
    const course: Course = new Course({
      id: this.courseId ?? 0,
      title: this.form.value.title!,
      description: this.form.value.description!,
      categoryId: this.form.value.categoryId ?? 0,
      category: category ?? null
    });

    if (this.isEdit) {
      this.store.updateCourse(course);
    } else {
      this.store.addCourse(course);
    }

    this.router.navigate(['learning/courses']).then();
  }
}
