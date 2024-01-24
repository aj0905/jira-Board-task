import { DialogRef } from '@angular/cdk/dialog';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TaskEnum } from '../home.enum';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  constructor(
    public toastrService: ToastrService,
    public dialogRef: DialogRef<{
      name: string;
      status: string;
    }>
  ) {}

  isSubmitted = false;

  data: {
    name: string;
    status: string;
  } = {
    name: '',
    status: TaskEnum.TODO,
  };

  save() {
    this.isSubmitted = true;
    if (this.data && this.data.name) {
      this.toastrService.success('Task added sucessfully');
      this.dialogRef.close(this.data);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
